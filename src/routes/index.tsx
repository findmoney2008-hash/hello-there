import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Star } from "lucide-react";
import hero from "@/assets/hero-burger.jpg";
import grill from "@/assets/grill.jpg";
import { Btn, ProductCard, Reveal, SectionTitle } from "@/components/site";
import { PRODUCTS } from "@/data/products";
import { BUSINESS, MAPS_URL } from "@/data/business";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Edmundo Abel — Geladaria e Hamburgaria na Samba, Luanda" },
      { name: "description", content: "Hambúrgueres, refeições, batatas fritas e gelados na Rua Direita da Samba, Luanda. Descubra o menu e venha visitar-nos." },
      { property: "og:title", content: "Edmundo Abel — Geladaria e Hamburgaria em Luanda" },
      { property: "og:description", content: "Hambúrgueres e gelados na Rua Direita da Samba, Luanda." },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute -right-40 top-10 h-[500px] w-[500px] rounded-full bg-accent/20 blur-3xl" aria-hidden />
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 md:grid-cols-2 md:py-24">
          <div className="animate-in fade-in slide-in-from-bottom-6 duration-700">
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/40 px-4 py-1.5 text-xs font-semibold text-primary">
              <MapPin className="h-3.5 w-3.5" /> {BUSINESS.address}
            </p>
            <h1 className="font-display text-5xl leading-[1.05] text-foreground md:text-7xl">
              O sabor que <span className="text-primary">transforma</span> cada momento.
            </h1>
            <p className="mt-6 max-w-lg text-lg text-muted-foreground">
              Descubra os sabores da Geladaria e Hamburgaria Edmundo Abel. Hambúrgueres deliciosos, refeições saborosas e momentos que merecem ser partilhados.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Btn to="/menu">Explorar o menu</Btn>
              <Btn href={MAPS_URL} external variant="outline">Como chegar</Btn>
            </div>
          </div>
          <div className="relative animate-in fade-in zoom-in-95 duration-1000">
            <div className="absolute inset-6 rounded-full bg-primary/25 blur-3xl" aria-hidden />
            <img src={hero} alt="Hambúrguer artesanal com queijo derretido" width={1280} height={1280} className="relative aspect-square w-full rounded-[2rem] object-cover shadow-2xl" />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20">
        <SectionTitle eyebrow="Menu" title="O que lhe apetece hoje?" sub="Descubra opções deliciosas para satisfazer a sua vontade." />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PRODUCTS.slice(0, 4).map((p) => <Reveal key={p.name}><ProductCard p={p} /></Reveal>)}
        </div>
        <div className="mt-10 text-center"><Btn to="/menu" variant="outline">Ver menu completo</Btn></div>
      </section>

      <section className="relative isolate overflow-hidden">
        <img src={grill} alt="Hambúrgueres a grelhar" loading="lazy" width={1024} height={1024} className="absolute inset-0 -z-10 h-full w-full object-cover opacity-40" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-background via-background/80 to-transparent" />
        <Reveal className="mx-auto max-w-7xl px-5 py-28">
          <h2 className="max-w-xl font-display text-4xl leading-tight md:text-6xl">A sua próxima refeição favorita está à sua espera.</h2>
          <p className="mt-5 max-w-md text-muted-foreground">Conheça as nossas opções e descubra o sabor que combina consigo.</p>
          <div className="mt-8"><Btn to="/menu">Consultar o menu</Btn></div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-5 py-20 text-center">
        <SectionTitle eyebrow="Avaliações" title="A opinião dos nossos clientes" />
        <Reveal className="rounded-2xl border border-border bg-card p-8">
          <div className="flex justify-center gap-1 text-primary" aria-hidden>{Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-5 w-5 fill-current" />)}</div>
          <p className="mt-3 text-sm text-muted-foreground">
            Classificação pública de {BUSINESS.rating.value}/5, com base em {BUSINESS.rating.count} avaliações no Google. Espaço preparado para mostrar avaliações reais de clientes.
          </p>
          <div className="mt-6"><Btn href={MAPS_URL} external variant="outline">Ver no Google Maps</Btn></div>
        </Reveal>
      </section>
    </>
  );
}
