import { ArrowUpRight, Linkedin, FileText, CheckCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export function Contact() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = (formData: FormData) => {
    const newErrors: Record<string, string> = {};
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    if (!name || name.trim() === "") {
      newErrors.name = "Name is required";
    }
    if (!email || email.trim() === "") {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!message || message.trim() === "") {
      newErrors.message = "Message is required";
    }

    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    const validationErrors = validate(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    setStatus("submitting");

    try {
      const response = await fetch("https://formspree.io/f/xpqgpapy", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="container-editorial pt-10 md:pt-12 pb-10 md:pb-12">
      <div className="rounded-3xl bg-primary text-primary-foreground p-8 md:p-12 lg:p-16 relative overflow-hidden">
        <div
          aria-hidden
          className="absolute -top-32 -right-32 w-[420px] h-[420px] rounded-full bg-[var(--cream)]/10 blur-3xl"
        />
        <div className="relative">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <h2 className="serif text-3xl md:text-4xl lg:text-5xl leading-[1.05]">
                Let&apos;s create <em className="not-italic opacity-80">meaningful</em> digital experiences together.
              </h2>
              <p className="mt-4 text-sm md:text-base opacity-80 max-w-md leading-relaxed">
                Open to collaborations, freelance projects, and full-time opportunities. Let&apos;s connect and build something remarkable.
              </p>

              <div className="mt-8 space-y-5">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.25em] opacity-70 mb-1">Email</p>
                  <a
                    href="mailto:hello@pansunadi.design"
                    className="serif text-xl md:text-2xl border-b border-[var(--cream)]/30 hover:border-[var(--cream)] transition-colors"
                  >
                    hello@pansunadi.design
                  </a>
                </div>
                <div className="flex flex-wrap gap-5">
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 text-sm font-medium hover:opacity-80 transition-opacity"
                  >
                    <Linkedin size={16} /> LinkedIn <ArrowUpRight size={14} />
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 text-sm font-medium hover:opacity-80 transition-opacity"
                  >
                    <FileText size={16} /> Resume <ArrowUpRight size={14} />
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.form
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-5"
              onSubmit={handleSubmit}
            >
              <AnimatePresence mode="wait">
                {status === "success" ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="flex flex-col items-center justify-center text-center py-12 space-y-4"
                  >
                    <CheckCircle size={48} className="text-[var(--cream)]" />
                    <h3 className="serif text-2xl">Message Sent</h3>
                    <p className="text-sm opacity-80 max-w-xs">
                      Thank you for reaching out. I&apos;ll get back to you as soon as possible.
                    </p>
                    <Button
                      type="button"
                      onClick={() => setStatus("idle")}
                      className="rounded-full bg-[var(--cream)]/10 border border-[var(--cream)]/20 text-[var(--cream)] px-6 h-10 text-sm font-medium hover:bg-[var(--cream)]/20 transition-colors mt-2"
                    >
                      Send Another Message
                    </Button>
                  </motion.div>
                ) : (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-5"
                  >
                    <div className="space-y-1.5">
                      <label htmlFor="name" className="text-[10px] uppercase tracking-[0.25em] opacity-70">
                        Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Your name"
                        className={`rounded-xl border-[var(--cream)]/20 bg-[var(--cream)]/10 text-primary-foreground placeholder:text-[var(--cream)]/40 focus-visible:ring-[var(--cream)]/40 h-11 ${errors.name ? "border-red-400/60 focus-visible:ring-red-400/40" : ""}`}
                      />
                      {errors.name && (
                        <p className="text-xs text-red-300 mt-1">{errors.name}</p>
                      )}
                    </div>
                    <div className="space-y-1.5">
                      <label htmlFor="email" className="text-[10px] uppercase tracking-[0.25em] opacity-70">
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="your@email.com"
                        className={`rounded-xl border-[var(--cream)]/20 bg-[var(--cream)]/10 text-primary-foreground placeholder:text-[var(--cream)]/40 focus-visible:ring-[var(--cream)]/40 h-11 ${errors.email ? "border-red-400/60 focus-visible:ring-red-400/40" : ""}`}
                      />
                      {errors.email && (
                        <p className="text-xs text-red-300 mt-1">{errors.email}</p>
                      )}
                    </div>
                    <div className="space-y-1.5">
                      <label htmlFor="message" className="text-[10px] uppercase tracking-[0.25em] opacity-70">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Tell me about your project..."
                        rows={4}
                        className={`rounded-xl border-[var(--cream)]/20 bg-[var(--cream)]/10 text-primary-foreground placeholder:text-[var(--cream)]/40 focus-visible:ring-[var(--cream)]/40 resize-none ${errors.message ? "border-red-400/60 focus-visible:ring-red-400/40" : ""}`}
                      />
                      {errors.message && (
                        <p className="text-xs text-red-300 mt-1">{errors.message}</p>
                      )}
                    </div>
                    <Button
                      type="submit"
                      disabled={status === "submitting"}
                      className="rounded-full bg-[var(--cream)] text-primary px-7 h-11 text-sm font-medium hover:bg-[var(--cream)]/90 transition-colors mt-1 disabled:opacity-60"
                    >
                      {status === "submitting" ? "Sending..." : "Send Message"}
                    </Button>
                    {status === "error" && (
                      <p className="text-xs text-red-300">
                        Something went wrong. Please try again later.
                      </p>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.form>
          </div>
        </div>
      </div>
    </section>
  );
}
