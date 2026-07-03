import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

function CountUp({ to, suffix = "+" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let raf = 0;
    const start = performance.now();
    const dur = 1600;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(to * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to]);

  return (
    <span ref={ref}>
      {n}
      {suffix}
    </span>
  );
}

const metrics = [
  { v: 2, label: "Years Experience" },
  { v: 10, label: "Projects Delivered" },
  { v: 3, label: "Organizations" },
];

export function Metrics() {
  return (
    <section className="container-editorial py-16 md:py-20">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="flex flex-col md:flex-row items-center justify-center gap-16 md:gap-24 lg:gap-32"
      >
        {metrics.map((m) => (
          <div key={m.label} className="text-center">
            <div className="serif text-6xl md:text-7xl lg:text-8xl text-primary leading-none tracking-[-0.02em]">
              <CountUp to={m.v} />
            </div>
            <div className="mt-3 text-sm md:text-base font-medium tracking-wide text-foreground/80 uppercase">
              {m.label}
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
