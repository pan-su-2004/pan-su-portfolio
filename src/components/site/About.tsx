import portrait from "@/assets/pansu-nadi-portfolio-about.jpg";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export function About() {
  return (
    <section id="about" className="container-editorial py-24 md:py-32">
      <div className="grid lg:grid-cols-12 gap-10 md:gap-16 items-start">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-5"
        >
          <div className="relative overflow-hidden rounded-2xl border border-border bg-surface aspect-[4/5]">
            <img
              src={portrait}
              alt="Portrait of Pan Su Nadi"
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
        </motion.div>

        <div className="lg:col-span-7 lg:pl-8">
          <p className="eyebrow">About</p>
          <h2 className="serif text-4xl md:text-6xl mt-4 leading-[1.05]">
            I design with <em className="text-primary not-italic">intention</em>, not decoration.
          </h2>

          <div className="mt-10 space-y-6 text-base md:text-lg text-foreground/85 leading-relaxed max-w-2xl">
            <p>
              I'm Pan Su Nadi — a UI/UX and graphic designer crafting digital experiences that feel
              both human and considered.
            </p>
            <p>
              My approach to design starts with understanding people before pixels. I enjoy solving
              real problems through thoughtful user experiences, structured systems, and
              collaborative product design. Whether designing a website or mobile app, I focus on
              creating interfaces that are intuitive, accessible, and aligned with business goals.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-8 max-w-xl">
            {[
              ["Experience", "2+ Years"],
              ["Collaboration", "Remote Teams"],
              ["Availability", "Open Worldwide"],
            ].map(([k, v]) => (
              <div key={k}>
                <div className="text-xs uppercase tracking-[0.22em] text-muted-foreground">{k}</div>
                <div className="serif text-xl mt-2">{v}</div>
              </div>
            ))}
          </div>

          <a
            href="#contact"
            className="mt-12 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-[var(--primary-deep)] transition-all hover:gap-3"
          >
            Get in touch <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
