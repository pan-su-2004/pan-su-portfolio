import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { getProject, getNextProject, type Project } from "@/lib/projects";

export const Route = createFileRoute("/work/$slug")({
  head: ({ params }) => {
    const p = getProject(params.slug);
    return {
      meta: p
        ? [
            { title: `${p.title} — Pan Su Nadi` },
            { name: "description", content: p.summary },
            { property: "og:title", content: `${p.title} — Pan Su Nadi` },
            { property: "og:description", content: p.summary },
            { property: "og:image", content: p.image },
          ]
        : [{ title: "Case Study — Pan Su Nadi" }],
    };
  },
  loader: ({ params }) => {
    const project = getProject(params.slug);
    if (!project) throw notFound();
    return { project };
  },
  component: CaseStudy,
});

function Section({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="container-editorial py-16 md:py-24 grid md:grid-cols-12 gap-8 md:gap-16"
    >
      <div className="md:col-span-4">
        <p className="eyebrow">{eyebrow}</p>
        <h2 className="serif text-3xl md:text-5xl mt-3 leading-[1.05]">{title}</h2>
      </div>
      <div className="md:col-span-8 text-base md:text-lg text-foreground/85 leading-relaxed space-y-5 max-w-2xl">
        {children}
      </div>
    </motion.section>
  );
}

function CaseStudy() {
  const { project } = Route.useLoaderData() as { project: Project };
  const next = getNextProject(project.slug);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />

      <article className="pt-32 md:pt-40">
        {/* Hero */}
        <header className="container-editorial">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-12"
          >
            <ArrowLeft size={14} /> Back to Main
          </Link>

          <div className="flex items-center gap-3 text-xs uppercase tracking-[0.22em] text-muted-foreground mb-6">
            <span className="text-primary">— {project.index}</span>
            <span>{project.category}</span>
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="serif text-5xl md:text-8xl leading-[0.98] tracking-[-0.02em] max-w-5xl"
          >
            {project.title}
          </motion.h1>

          <div className="mt-12 grid sm:grid-cols-3 gap-6 max-w-3xl text-sm border-y border-border py-6">
            <div>
              <div className="text-xs uppercase tracking-[0.22em] text-muted-foreground">Role</div>
              <div className="mt-1">{project.role}</div>
            </div>
            <div>
              <div className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
                Duration
              </div>
              <div className="mt-1">{project.year}</div>
            </div>
            <div>
              <div className="text-xs uppercase tracking-[0.22em] text-muted-foreground">Tools</div>
              <div className="mt-1">{project.category}</div>
            </div>
          </div>
        </header>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="container-editorial mt-14"
        >
          <div className="overflow-hidden rounded-2xl border border-border bg-surface aspect-[16/10]">
            <img src={project.image} alt={project.title} className="h-full w-full object-cover" />
          </div>
        </motion.div>

        <Section eyebrow="Overview" title="Project overview.">
          <p>{project.overview}</p>
        </Section>

        <Section eyebrow="Problem" title="The problem.">
          <p>{project.problem}</p>
        </Section>

        <Section eyebrow="Goals" title="What success looked like.">
          <ul className="space-y-3">
            {project.goals.map((g, i) => (
              <li key={i} className="flex gap-4">
                <span className="serif text-primary text-xl shrink-0 w-8">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span>{g}</span>
              </li>
            ))}
          </ul>
        </Section>

        <Section eyebrow="Research" title="Listening before designing.">
          <p>{project.research}</p>
        </Section>

        <Section eyebrow="Design Systems" title="From sketches to system.">
          <p>{project.process}</p>
        </Section>

        <div className="container-editorial">
          <div className="overflow-hidden rounded-2xl border border-border bg-surface aspect-[16/9]">
            <img
              src={project.imageWireframe}
              alt={`${project.title} process`}
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        <Section eyebrow="Wireframes" title="Structure first, polish later.">
          <p>{project.wireframes}</p>
        </Section>

        <Section eyebrow="Decisions" title="Design decisions that mattered.">
          <ul className="space-y-3">
            {project.decisions.map((d, i) => (
              <li key={i} className="flex gap-4">
                <span className="text-primary mt-2 h-1.5 w-1.5 rounded-full shrink-0 bg-primary" />
                <span>{d}</span>
              </li>
            ))}
          </ul>
        </Section>

        <Section eyebrow="Solution" title="The final solution.">
          <p>{project.solution}</p>
        </Section>

        <div className="container-editorial">
          <div className="overflow-hidden rounded-2xl border border-border bg-surface aspect-[16/9]">
            <img
              src={project.imageSolution}
              alt={`${project.title} process`}
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        <section className="container-editorial py-16 md:py-24">
          <p className="eyebrow text-center">Outcomes</p>
          <h2 className="serif text-3xl md:text-5xl mt-3 text-center mb-14">
            Results that mattered.
          </h2>
          <div className="grid md:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {project.results.map((r, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="rounded-2xl border border-border bg-card p-8 text-center"
              >
                <p className="serif text-2xl md:text-3xl text-primary leading-tight">{r}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <Section eyebrow="Reflection" title="What I'd carry forward.">
          <p className="serif text-2xl md:text-3xl leading-snug text-foreground">
            "{project.reflection}"
          </p>
        </Section>

        {/* Next */}
        <section className="container-editorial py-20 md:py-28 border-t border-border">
          <p className="eyebrow">Next Case Study</p>
          <Link
            to="/work/$slug"
            params={{ slug: next.slug }}
            className="group mt-6 flex flex-wrap items-end justify-between gap-6"
          >
            <h3 className="serif text-4xl md:text-7xl leading-[1] group-hover:text-primary transition-colors max-w-3xl">
              {next.title} <ArrowUpRight className="inline-block -mt-2" size={36} />
            </h3>
            <span className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
              — {next.index} · {next.category}
            </span>
          </Link>
        </section>
      </article>

      <Footer />
    </div>
  );
}
