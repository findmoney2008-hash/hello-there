import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ProductCard, Reveal, SectionTitle } from "@/components/site";
import { CATEGORIES, PRODUCTS, type Category } from "@/data/products";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Menu — Edmundo Abel, Hamburgaria em Luanda" },
      { name: "description", content: "Hambúrgueres, refeições, acompanhamentos, gelados e bebidas da Geladaria e Hamburgaria Edmundo Abel, Corimba, Luanda." },
      { property: "og:title", content: "Menu — Edmundo Abel" },
      { property: "og:description", content: "Descubra hambúrgueres, refeições e gelados na Estrada da Samba, Corimba, Luanda." },
    ],
  }),
  component: MenuPage,
});

function MenuPage() {
  const [cat, setCat] = useState<Category | "Todos">("Todos");
  const list = cat === "Todos" ? PRODUCTS : PRODUCTS.filter((p) => p.category === cat);
  return (
    <section className="mx-auto max-w-7xl px-5 py-20">
      <SectionTitle eyebrow="Menu" title="O que lhe apetece hoje?" sub="Descubra opções deliciosas para satisfazer a sua vontade." />
      <p className="mx-auto -mt-6 mb-10 max-w-xl rounded-xl border border-primary/30 bg-primary/5 px-4 py-3 text-center text-sm text-muted-foreground">
        Preços em Kwanzas, conforme o menu afixado no estabelecimento. Disponibilidade sujeita a confirmação.
      </p>
      <div className="mb-10 flex flex-wrap justify-center gap-2" role="tablist">
        {(["Todos", ...CATEGORIES] as const).map((c) => (
          <button key={c} role="tab" aria-selected={cat === c} onClick={() => setCat(c)}
            className={`rounded-full px-5 py-2 text-sm font-semibold transition ${cat === c ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground hover:text-primary"}`}>
            {c}
          </button>
        ))}
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {list.map((p) => <Reveal key={p.name}><ProductCard p={p} /></Reveal>)}
      </div>
    </section>
  );
}
