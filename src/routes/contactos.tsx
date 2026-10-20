import { createFileRoute } from "@tanstack/react-router";
import { Clock, MapPin, MessageCircle, Phone, Hash } from "lucide-react";
import { Btn, Reveal, SectionTitle } from "@/components/site";
import { BUSINESS, MAPS_EMBED, MAPS_URL } from "@/data/business";

export const Route = createFileRoute("/contactos")({
  head: () => ({
    meta: [
      { title: "Contactos e localização — Edmundo Abel, Samba, Luanda" },
      { name: "description", content: "Rua Direita da Samba, Luanda. Telefone +244 923 047 469. Veja como chegar à Geladaria e Hamburgaria Edmundo Abel." },
      { property: "og:title", content: "Contactos — Edmundo Abel" },
      { property: "og:description", content: "Rua Direita da Samba, Luanda, Angola." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const rows = [
    { icon: MapPin, label: "Endereço", value: BUSINESS.address },
    { icon: Hash, label: "Código Plus", value: BUSINESS.plusCode },
    { icon: Phone, label: "Telefone (ficha pública)", value: BUSINESS.phoneDisplay },
    { icon: Clock, label: "Horário", value: BUSINESS.hours },
  ];
  return (
    <section className="mx-auto max-w-7xl px-5 py-20">
      <SectionTitle eyebrow="Visite-nos" title="Estamos à sua espera!" sub={BUSINESS.name} />
      <div className="grid gap-8 md:grid-cols-2">
        <Reveal className="rounded-2xl border border-border bg-card p-8">
          <ul className="space-y-5">
            {rows.map((r) => (
              <li key={r.label} className="flex gap-4">
                <r.icon className="mt-1 h-5 w-5 shrink-0 text-primary" />
                <div><p className="text-xs uppercase tracking-wider text-muted-foreground">{r.label}</p><p className="font-semibold">{r.value}</p></div>
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap gap-3">
            <Btn href={BUSINESS.phoneHref}><Phone className="h-4 w-4" /> Ligar</Btn>
            <Btn href={MAPS_URL} external variant="outline"><MapPin className="h-4 w-4" /> Abrir no Google Maps</Btn>
          </div>
          <div className="mt-6 flex items-center gap-3 rounded-xl border border-dashed border-border p-4 text-sm text-muted-foreground">
            <MessageCircle className="h-5 w-5 text-primary" />
            {BUSINESS.whatsapp ? <a href={BUSINESS.whatsapp} className="font-semibold text-primary">Falar no WhatsApp</a> : "WhatsApp oficial — disponível em breve, após confirmação."}
          </div>
        </Reveal>
        <Reveal className="overflow-hidden rounded-2xl border border-border">
          <iframe title="Mapa da localização" src={MAPS_EMBED} loading="lazy" className="h-full min-h-[400px] w-full" referrerPolicy="no-referrer-when-downgrade" />
        </Reveal>
      </div>
    </section>
  );
}
