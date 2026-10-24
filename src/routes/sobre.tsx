import { createFileRoute } from "@tanstack/react-router";
import { PHOTOS } from "@/data/photos";
import { Btn, Reveal } from "@/components/site";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "Sobre nós — Edmundo Abel, Corimba, Luanda" },
      { name: "description", content: "Conheça a Geladaria e Hamburgaria Edmundo Abel, na Estrada da Samba, em Corimba, Luanda." },
      { property: "og:title", content: "Sobre nós — Edmundo Abel" },
      { property: "og:description", content: "Hambúrgueres e refeições na Estrada da Samba, Corimba, Luanda." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <section className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 md:grid-cols-2">
      <Reveal>
        <img src={PHOTOS.fachadaClientes} alt="Clientes à porta da Geladaria e Hamburgaria Edmundo Abel" loading="lazy" width={1280} height={960} className="aspect-[4/3] w-full rounded-[2rem] object-cover" />
      </Reveal>
      <Reveal>
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-accent">Sobre nós</p>
        <h1 className="font-display text-4xl leading-tight md:text-5xl">Mais do que uma refeição, uma experiência de sabor.</h1>
        <p className="mt-6 text-lg text-muted-foreground">
          A Geladaria e Hamburgaria Edmundo Abel é um estabelecimento de restauração situado na Estrada da Samba, em Corimba, Luanda. O nosso espaço apresenta opções de hambúrgueres e refeições para quem procura desfrutar de bons sabores.
        </p>
        <div className="mt-8 flex flex-wrap gap-4"><Btn to="/menu">Ver o menu</Btn><Btn to="/contactos" variant="outline">Contactos</Btn></div>
      </Reveal>
    </section>
  );
}
