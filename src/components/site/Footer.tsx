export function Footer() {
  return (
    <footer className="border-t border-border/70 mt-16">
      <div className="container-editorial py-12 grid gap-8 md:grid-cols-[1fr_auto] items-end">
        <div>
          <p className="eyebrow">Pan Su Nadi · Portfolio 2026</p>
          <p className="serif text-2xl md:text-3xl mt-3 max-w-xl">
            Currently open to selected UI/UX collaborations for 2026.
          </p>
        </div>
        <div className="flex flex-col md:items-end gap-2 text-sm text-muted-foreground">
          <a
            href="https://www.facebook.com/share/1CjCKDhs4d/?mibextid=wwXIfr"
            target="_blank"
            className="hover:text-primary transition-colors"
          >
            Facebook
          </a>
          <a
            href="https://t.me/Phelia_2004"
            target="_blank"
            className="hover:text-primary transition-colors"
          >
            Telegram
          </a>
          <a
            href="https://www.behance.net/pansunadi"
            target="_blank"
            className="hover:text-primary transition-colors"
          >
            Behance
          </a>
          <a
            href="https://www.linkedin.com/in/pan-su"
            target="_blank"
            className="hover:text-primary transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </div>
      <div className="container-editorial border-t border-border/60 py-6 flex flex-wrap justify-between gap-2 text-xs text-muted-foreground">
        <span>© {new Date().getFullYear()} Pan Su Nadi. All rights reserved.</span>
        <span>Designed & built with love.</span>
      </div>
    </footer>
  );
}
