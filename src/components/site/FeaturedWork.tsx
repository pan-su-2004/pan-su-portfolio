import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/projects";

export function FeaturedWork() {
  return (
    <section id="work" className="container-editorial py-24 md:py-32">
      <div className="flex items-end justify-between flex-wrap gap-6 mb-14">
        <div>
          <p className="eyebrow">Selected Work · 2024–2026</p>
          <h2 className="serif text-4xl md:text-6xl mt-3 max-w-2xl leading-[1.05]">
            Featured case studies.
          </h2>
        </div>
        <p className="max-w-sm text-base text-muted-foreground">
          Three projects where research, visual design and developer collaboration came together to
          ship considered products.
        </p>
      </div>

      <div className="flex flex-col gap-20 md:gap-28">
        {projects.map((p, i) => (
          <motion.article
            key={p.slug}
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className={`grid gap-8 md:gap-12 md:grid-cols-12 items-center ${
              i % 2 === 1 ? "md:[&>a]:order-2" : ""
            }`}
          >
            <Link
              to="/work/$slug"
              params={{ slug: p.slug }}
              className="block md:col-span-7 group overflow-hidden rounded-2xl border border-border bg-surface aspect-[4/3]"
            >
              <img
                src={p.image}
                alt={p.title}
                loading="lazy"
                width={1280}
                height={960}
                className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
              />
            </Link>

            <div className="md:col-span-5 flex flex-col gap-6">
              <div className="flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                <span className="text-primary">— {p.index}</span>
                <span>{p.category}</span>
              </div>
              <h3 className="serif text-3xl md:text-5xl leading-[1.05]">{p.title}</h3>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <div className="text-muted-foreground text-xs uppercase tracking-[0.18em] mb-1">
                    Role
                  </div>
                  <div>{p.role}</div>
                </div>
                <div>
                  <div className="text-muted-foreground text-xs uppercase tracking-[0.18em] mb-1">
                    Duration
                  </div>
                  <div>{p.year}</div>
                </div>
              </div>
              <p className="text-base text-muted-foreground leading-relaxed">{p.summary}</p>
              <Link
                to="/work/$slug"
                params={{ slug: p.slug }}
                className="inline-flex w-fit items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground hover:bg-[var(--primary-deep)] transition-all hover:gap-3"
              >
                View case study <ArrowUpRight size={16} />
              </Link>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
