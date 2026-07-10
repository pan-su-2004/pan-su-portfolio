import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import g1 from "@/assets/graphic-1.jpg";
import g2 from "@/assets/graphic-2.jpg";
import g3 from "@/assets/graphic-3.jpg";
import g4 from "@/assets/graphic-4.jpg";
import g5 from "@/assets/graphic-5.jpg";
import g6 from "@/assets/graphic-6.jpg";

type Item = {
  img: string;
  title: string;
  tag: string;
  ratio: string; // tailwind aspect ratio class
};

// Mixed ratios → a curated editorial mosaic that mirrors real artwork dimensions.
const items: Item[] = [
  {
    img: g1,
    title: "Tropicana Lemon Juice",
    tag: "Social Media Campaign",
    ratio: "aspect-[2480/3508]",
  }, // portrait A4
  { img: g2, title: "Crispy Fried Chicken", tag: "Social Media Campaign", ratio: "aspect-square" }, // 3000x3000
  { img: g3, title: "Fanta", tag: "Social Media Campaign", ratio: "aspect-square" }, // 1500x1500
  {
    img: g4,
    title: "IELTS Preparation Campaign",
    tag: "Social Media Campaign",
    ratio: "aspect-[3508/2480]",
  }, // landscape
  {
    img: g5,
    title: "Aquafina",
    tag: "Social Media Campaign",
    ratio: "aspect-square",
  }, // 2000x2000
  {
    img: g6,
    title: "The Great American Ride",
    tag: "Social Media Campaign",
    ratio: "aspect-[2480/3508]",
  }, // portrait
];

export function GraphicDesign() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const active = openIdx !== null ? items[openIdx] : null;

  return (
    <section className="py-24 md:py-32 bg-[color-mix(in_oklch,var(--primary)_5%,var(--background))]">
      <div className="container-editorial">
        <div className="max-w-3xl mb-14 md:mb-20">
          <p className="eyebrow">Beyond Product</p>
          <h2 className="serif text-4xl md:text-6xl mt-3 leading-[1.05]">
            Selected graphic design work.
          </h2>
          <p className="mt-5 text-base md:text-lg text-muted-foreground max-w-xl">
            A curated selection of branding, marketing, social media, and visual design projects.
          </p>
        </div>

        {/* Editorial masonry: CSS columns gracefully accommodate mixed ratios. */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 md:gap-8 [column-fill:_balance]">
          {items.map((g, i) => (
            <figure
              key={i}
              onClick={() => setOpenIdx(i)}
              className="group relative mb-6 md:mb-8 break-inside-avoid overflow-hidden rounded-2xl border border-border bg-card cursor-pointer transition-shadow duration-500 hover:shadow-[0_30px_60px_-20px_rgba(0,0,0,0.35)]"
            >
              <div className={`${g.ratio} overflow-hidden`}>
                <img
                  src={g.img}
                  alt={g.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                />
              </div>
              <div className="pointer-events-none absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/25" />
              <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 p-5 md:p-6 bg-gradient-to-t from-black/70 via-black/25 to-transparent text-[var(--cream)] opacity-0 translate-y-2 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                <div className="text-[10px] uppercase tracking-[0.22em] opacity-80">{g.tag}</div>
                <div className="serif text-lg md:text-xl mt-1">{g.title}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>

      <Dialog open={openIdx !== null} onOpenChange={(o) => !o && setOpenIdx(null)}>
        <DialogContent className="max-w-5xl p-0 bg-background border-border overflow-hidden">
          {active && (
            <div className="flex flex-col">
              <div className="bg-black/5 max-h-[80vh] overflow-hidden flex items-center justify-center">
                <img
                  src={active.img}
                  alt={active.title}
                  className="max-h-[80vh] w-auto object-contain"
                />
              </div>
              <div className="p-6 md:p-8">
                <div className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                  {active.tag}
                </div>
                <div className="serif text-2xl md:text-3xl mt-2">{active.title}</div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
