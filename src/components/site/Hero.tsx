import portrait from "@/assets/pan-su-nadi-profile.jpg";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Link } from "@tanstack/react-router";

export function Hero() {
  return (
    <section className="relative pt-16 md:pt-20 lg:pt-24 pb-12 md:pb-16 overflow-hidden">
      <div className="container-editorial">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          <div className="lg:col-span-7">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.1, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
              className="serif text-[14vw] md:text-[8.5vw] lg:text-[7.2vw] leading-[0.95] tracking-[-0.025em]"
            >
              Pan Su <em className="not-italic text-primary">Nadi</em>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6 text-xl md:text-2xl lg:text-[1.65rem] font-semibold tracking-[-0.02em] text-foreground max-w-xl"
            >
              UI/UX Designer & Graphic Designer
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="mt-8 text-sm md:text-base leading-relaxed text-foreground/50 max-w-lg"
            >
              Designing thoughtful digital experiences through UX, visual design, and collaboration.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <a
                href="#work"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-[var(--primary-deep)] transition-all hover:gap-3"
              >
                View Work <ArrowDown size={15} />
              </a>
              <Link
                to="/"
                hash="contact"
                className="inline-flex items-center gap-2 rounded-full border border-foreground/15 px-6 py-3 text-sm font-medium hover:border-primary hover:text-primary transition-colors"
              >
                Contact Me
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="relative overflow-hidden rounded-2xl border border-border bg-surface aspect-[9/10] shadow-[0_30px_80px_-30px_rgba(106,8,9,0.35)] max-w-[95%] mx-auto">
              <img
                src={portrait}
                alt="Pan Su Nadi"
                width={896}
                height={1152}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-black/55 to-transparent">
                <p className="text-[10px] uppercase tracking-[0.25em] text-[var(--cream)]/80">
                  Designer
                </p>
                <p className="serif text-xl text-[var(--cream)]">Pan Su Nadi</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
