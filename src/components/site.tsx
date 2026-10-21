import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { Menu, X, Phone, MapPin } from "lucide-react";
import { BUSINESS, MAPS_URL } from "@/data/business";
import type { Product } from "@/data/products";

const NAV = [
  { to: "/", label: "Início" },
  { to: "/menu", label: "Menu" },
  { to: "/sobre", label: "Sobre nós" },
  { to: "/galeria", label: "Galeria" },
  { to: "/contactos", label: "Contactos" },
] as const;

export function Logo() {
  return (
    <Link to="/" className="leading-none" aria-label="Edmundo Abel — início">
      <span className="block font-display text-2xl tracking-wide text-primary">EDMUNDO ABEL</span>
      <span className="block text-[0.65rem] uppercase tracking-[0.3em] text-muted-foreground">Geladaria & Hamburgaria</span>
    </Link>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
        <Logo />
        <nav className="hidden items-center gap-7 md:flex" aria-label="Principal">
          {NAV.map((n) => (
            <Link key={n.to} to={n.to} className="text-sm font-semibold text-foreground/80 transition hover:text-primary" activeProps={{ className: "text-primary" }} activeOptions={{ exact: true }}>
              {n.label}
            </Link>
          ))}
          <Btn to="/menu">Ver o menu</Btn>
        </nav>
        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)} aria-label="Abrir menu" aria-expanded={open}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav className="flex flex-col gap-4 border-t border-border px-5 py-5 md:hidden" aria-label="Móvel">
          {NAV.map((n) => (
            <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="font-semibold text-foreground">{n.label}</Link>
          ))}
          <Btn to="/menu">Ver o menu</Btn>
        </nav>
      )}
    </header>
  );
}

const btnBase = "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-bold uppercase tracking-wider transition duration-300 hover:-translate-y-0.5";
const btnVar = {
  primary: "bg-primary text-primary-foreground shadow-glow hover:brightness-110",
  outline: "border border-foreground/30 text-foreground hover:border-primary hover:text-primary",
};

export function Btn({ to, href, children, variant = "primary", external }: { to?: "/" | "/menu" | "/sobre" | "/galeria" | "/contactos"; href?: string; children: ReactNode; variant?: "primary" | "outline"; external?: boolean }) {
  const cls = `${btnBase} ${btnVar[variant]}`;
  if (to) return <Link to={to} className={cls}>{children}</Link>;
  return <a href={href} className={cls} {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}>{children}</a>;
}

export function Reveal({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => { if (e?.isIntersecting) { setShown(true); io.disconnect(); } }, { threshold: 0.12 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return <div ref={ref} className={`transition-all duration-700 ${shown ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"} ${className}`}>{children}</div>;
}

export function SectionTitle({ eyebrow, title, sub }: { eyebrow?: string; title: string; sub?: string }) {
  return (
    <Reveal className="mx-auto mb-12 max-w-2xl text-center">
      {eyebrow && <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-accent">{eyebrow}</p>}
      <h2 className="font-display text-4xl leading-tight text-foreground md:text-5xl">{title}</h2>
      {sub && <p className="mt-4 text-muted-foreground">{sub}</p>}
    </Reveal>
  );
}

export function ProductCard({ p }: { p: Product }) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-border bg-card transition duration-300 hover:-translate-y-1 hover:border-primary/60">
      <div className="relative aspect-square overflow-hidden">
        {p.image ? (
          <img src={p.image} alt={p.name} loading="lazy" width={1024} height={1024} className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-primary/20 via-secondary to-accent/20 p-6 text-center">
            <span className="font-display text-3xl leading-tight text-primary">{p.name}</span>
          </div>
        )}
      </div>
      <div className="p-5">
        <p className="text-xs font-semibold uppercase tracking-wider text-accent">{p.category}</p>
        <h3 className="mt-1 text-lg font-bold text-card-foreground">{p.name}</h3>
        <p className="mt-1 text-sm text-muted-foreground">{p.description}</p>
        <p className="mt-4 text-sm font-semibold text-primary">{p.price ?? "Preço por confirmar"}</p>
      </div>
    </article>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-3">
        <div>
          <Logo />
          <p className="mt-4 text-sm text-muted-foreground">{BUSINESS.name}</p>
        </div>
        <div className="space-y-3 text-sm text-muted-foreground">
          <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="flex gap-2 hover:text-primary"><MapPin className="h-4 w-4 shrink-0 text-primary" />{BUSINESS.address}</a>
          <a href={BUSINESS.phoneHref} className="flex gap-2 hover:text-primary"><Phone className="h-4 w-4 shrink-0 text-primary" />{BUSINESS.phoneDisplay} <span className="text-xs">(contacto por confirmar)</span></a>
        </div>
        <nav className="grid grid-cols-2 gap-2 text-sm" aria-label="Rodapé">
          {NAV.map((n) => <Link key={n.to} to={n.to} className="text-muted-foreground hover:text-primary">{n.label}</Link>)}
        </nav>
      </div>
      <div className="border-t border-border px-5 py-6 text-center text-sm text-muted-foreground">
        <p className="font-display text-xl tracking-wide text-primary">Edmundo Abel — {BUSINESS.tagline}</p>
        <p className="mt-2">© {new Date().getFullYear()} {BUSINESS.name}. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
