import { motion } from "framer-motion";

const cards = [
  {
    n: "01",
    title: "UI/UX Design",
    body: "End-to-end product design rooted in research, structure and clarity of intent.",
  },
  {
    n: "02",
    title: "App Design",
    body: "Mobile-first experiences where every gesture and screen earns its place.",
  },
  {
    n: "03",
    title: "Web Design",
    body: "Editorial, responsive websites that hold up at every breakpoint.",
  },
  {
    n: "04",
    title: "Graphic Design",
    body: "Brand systems, print and social work with a confident editorial voice.",
  },
  {
    n: "05",
    title: "Design Systems",
    body: "Scalable component libraries that keep product and engineering aligned.",
  },
];

export function Expertise() {
  return (
    <section className="container-editorial py-20 md:py-28">
      <div className="grid md:grid-cols-[1fr_2fr] gap-10 mb-14 items-end">
        <div>
          <p className="eyebrow">Expertise</p>
          <h2 className="serif text-4xl md:text-5xl mt-3">A practice across five disciplines.</h2>
        </div>
        <p className="text-base text-muted-foreground md:text-lg max-w-xl md:justify-self-end">
          I combine product thinking, user experience, interface design, and visual communication to
          build digital products that are intuitive, scalable, and enjoyable to use.
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map((c, i) => (
          <motion.div
            key={c.n}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -6, scale: 1.015 }}
            className="group rounded-2xl border border-border bg-card p-7 md:p-8 shadow-[0_1px_0_rgba(0,0,0,0.02),0_24px_60px_-30px_rgba(106,8,9,0.18)] transition-shadow hover:shadow-[0_1px_0_rgba(0,0,0,0.02),0_30px_80px_-30px_rgba(106,8,9,0.28)]"
          >
            <div className="flex items-start justify-between mb-10">
              <span className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
                {c.n}
              </span>
              <span className="h-2 w-2 rounded-full bg-primary" />
            </div>
            <h3 className="serif text-2xl md:text-3xl mb-3 group-hover:text-primary transition-colors">
              {c.title}
            </h3>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{c.body}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
