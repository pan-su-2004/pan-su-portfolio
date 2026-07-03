import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const items = [
  { label: "About", href: "/#about" },
  { label: "Work", href: "/#work" },
  { label: "Experience", href: "/#experience" },
  { label: "Contact", href: "/#contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-background/85 backdrop-blur-md border-b border-border/60" : "bg-transparent"
      }`}
    >
      <div className="container-editorial flex items-center justify-between py-5">
        <Link to="/" className="group flex items-center gap-3">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-primary text-primary-foreground serif text-lg leading-none">
            P
          </span>
          <span className="hidden sm:block">
            <span className="block serif text-base leading-none">Pan Su Nadi</span>
            <span className="block text-[10px] uppercase tracking-[0.25em] text-muted-foreground mt-1">
              UI/UX · Graphic
            </span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-9">
          {items.map((i) => (
            <a
              key={i.href}
              href={i.href}
              className="text-sm text-foreground/80 hover:text-primary transition-colors relative after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-primary after:transition-all hover:after:w-full"
            >
              {i.label}
            </a>
          ))}
          <a
            href="https://drive.google.com/file/d/1ovgSElzF_dl1jUXXEv7gO_IgWq6QMVDl/view"
            target="_blank"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-[var(--primary-deep)] transition"
          >
            Resume
          </a>
        </nav>

        <button
          className="md:hidden grid h-10 w-10 place-items-center rounded-full border border-border"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="container-editorial py-6 flex flex-col gap-4">
            {items.map((i) => (
              <a
                key={i.href}
                href={i.href}
                className="serif text-2xl"
                onClick={() => setOpen(false)}
              >
                {i.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex w-fit items-center rounded-full bg-primary px-5 py-2.5 text-sm text-primary-foreground"
            >
              Resume
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
