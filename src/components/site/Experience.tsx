import { motion } from "framer-motion";

const experience = [
  {
    company: "BIMS",
    role: "UI/UX Designer",
    period: "Aug 2025 — Apr 2026",
    location: "Remote",
    duties: ["UI/UX Design", "Website Design", "Dashboard Design", "Design Systems", "Developer Handoff"],
  },
  {
    company: "HYPEN Organization",
    role: "Volunteer Graphic Designer",
    period: "Jun 2024 — Jun 2025",
    location: "Remote",
    duties: ["Social Media Graphics", "Marketing Materials", "Visual Content Design"],
  },
  {
    company: "SINISANA",
    role: "UI/UX Designer",
    period: "Jun 2024 — Sep 2024",
    location: "Remote",
    duties: ["Website Redesign", "Mobile App Design", "User Experience Improvements"],
  },
];

const education = [
  {
    period: "2023 \u2013 2026",
    school: "Yadanabon University",
    degree: "Bachelor of Arts (BA) in English",
  },
  {
    period: "2023 \u2013 2025",
    school: "Lithan Educlaas Academy",
    degree: "Higher National Diploma in Computer Science",
  },
];

export function Experience() {
  return (
    <section id="experience" className="container-editorial py-24 md:py-32">
      <div className="grid md:grid-cols-12 gap-10 md:gap-16">
        <div className="md:col-span-4">
          <p className="eyebrow">Experience</p>
          <h2 className="serif text-4xl md:text-5xl mt-3 leading-[1.05]">
            A timeline of <em className="text-primary not-italic">practice</em> and craft.
          </h2>
          <p className="mt-5 text-muted-foreground text-base max-w-md">
            Two years across in-house and remote teams — designing for products, brand
            and the everyday work in between.
          </p>
        </div>

        <ol className="md:col-span-8 relative border-l border-border pl-8 md:pl-12 space-y-12">
          {experience.map((e, i) => (
            <motion.li
              key={e.company}
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <span className="absolute -left-[42px] md:-left-[54px] top-2 grid h-3 w-3 place-items-center rounded-full bg-primary ring-4 ring-background" />
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="serif text-2xl md:text-3xl">{e.company}</h3>
                <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{e.period}</span>
              </div>
              <div className="mt-1 text-sm text-primary">{e.role} · <span className="text-muted-foreground">{e.location}</span></div>
              <ul className="mt-5 flex flex-wrap gap-2">
                {e.duties.map((d) => (
                  <li key={d} className="rounded-full border border-border bg-card/60 px-3 py-1 text-xs text-foreground/80">
                    {d}
                  </li>
                ))}
              </ul>
            </motion.li>
          ))}
        </ol>
      </div>

      <div className="mt-24 md:mt-32 grid md:grid-cols-12 gap-10 md:gap-16">
        <div className="md:col-span-4">
          <p className="eyebrow">Education</p>
          <h2 className="serif text-4xl md:text-5xl mt-3 leading-[1.05]">Foundations.</h2>
        </div>
        <div className="md:col-span-8 grid sm:grid-cols-2 gap-5">
          {education.map((e, i) => (
            <motion.div
              key={e.degree}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6, scale: 1.015 }}
              className="group rounded-2xl border border-border bg-card p-7 md:p-8 shadow-[0_1px_0_rgba(0,0,0,0.02),0_24px_60px_-30px_rgba(106,8,9,0.18)] transition-shadow hover:shadow-[0_1px_0_rgba(0,0,0,0.02),0_30px_80px_-30px_rgba(106,8,9,0.28)]"
            >
              <div className="flex items-start justify-between mb-8">
                <span className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
                  {e.period}
                </span>
                <span className="h-2 w-2 rounded-full bg-primary" />
              </div>
              <h3 className="serif text-xl md:text-2xl leading-snug group-hover:text-primary transition-colors">
                {e.degree}
              </h3>
              <p className="mt-3 text-sm md:text-base text-muted-foreground">{e.school}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
