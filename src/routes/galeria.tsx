import { createFileRoute } from "@tanstack/react-router";
import hero from "@/assets/hero-burger.jpg";
import classic from "@/assets/classic.jpg";
import meal from "@/assets/meal.jpg";
import fries from "@/assets/fries.jpg";
import icecream from "@/assets/icecream.jpg";
import grill from "@/assets/grill.jpg";
import interior from "@/assets/interior.jpg";
import drinks from "@/assets/drinks.jpg";
import { Reveal, SectionTitle } from "@/components/site";

// Imagens ilustrativas — substituir por fotografias reais da hamburgaria.
const IMAGES = [
  { src: hero, alt: "Hambúrguer com queijo" },
  { src: meal, alt: "Refeição completa" },
  { src: fries, alt: "Batatas fritas" },
  { src: icecream, alt: "Gelados variados" },
  { src: grill, alt: "Preparação dos alimentos" },
  { src: interior, alt: "Ambiente do estabelecimento" },
  { src: classic, alt: "Hambúrguer clássico" },
  { src: drinks, alt: "Bebidas" },
];

export const Route = createFileRoute("/galeria")({
  head: () => ({
    meta: [
      { title: "Galeria — Edmundo Abel, Luanda" },
      { name: "description", content: "Hambúrgueres, refeições, batatas fritas e gelados da Geladaria e Hamburgaria Edmundo Abel." },
      { property: "og:title", content: "Galeria — Edmundo Abel" },
      { property: "og:description", content: "Imagens de hambúrgueres, refeições e gelados." },
    ],
  }),
  component: Gallery,
});

function Gallery() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20">
      <SectionTitle eyebrow="Galeria" title="Sabores para ver" sub="Imagens ilustrativas, a substituir por fotografias reais do espaço." />
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {IMAGES.map((img) => (
          <Reveal key={img.alt}>
            <figure className="group relative aspect-square overflow-hidden rounded-2xl">
              <img src={img.src} alt={img.alt} loading="lazy" width={1024} height={1024} className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background/90 to-transparent p-4 text-sm font-semibold opacity-0 transition group-hover:opacity-100">{img.alt}</figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
