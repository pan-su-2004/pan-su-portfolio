import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { Metrics } from "@/components/site/Metrics";
import { Toolkit } from "@/components/site/Toolkit";
import { Expertise } from "@/components/site/Expertise";
import { About } from "@/components/site/About";
import { FeaturedWork } from "@/components/site/FeaturedWork";
import { GraphicDesign } from "@/components/site/GraphicDesign";
import { Experience } from "@/components/site/Experience";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Pan Su Nadi — UI/UX & Graphic Designer" },
      {
        name: "description",
        content:
          "Portfolio of Pan Su Nadi, UI/UX and graphic designer crafting thoughtful digital experiences through UX research, visual design and collaboration.",
      },
      { property: "og:title", content: "Pan Su Nadi — UI/UX & Graphic Designer" },
      {
        property: "og:description",
        content:
          "Thoughtful digital experiences through UX, visual design and collaboration.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <Metrics />
        <Toolkit />
        <Expertise />
        <About />
        <FeaturedWork />
        <GraphicDesign />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
