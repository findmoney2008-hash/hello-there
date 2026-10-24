// Dados comerciais — editar aqui para atualizar todo o site.
export const BUSINESS = {
  name: "Geladaria e Hamburgaria Edmundo Abel",
  short: "Edmundo Abel",
  address: "Estrada da Samba, Corimba, Luanda, Angola",
  landmark: "Na rua da Geladaria Edmundo Abel",
  plusCode: "46P3+X3J",
  phoneDisplay: "+244 923 047 469",
  phoneHref: "tel:+244923047469",
  hours: "Até às 22h30 (sujeito a confirmação)",
  whatsapp: null as string | null, // ex.: "https://wa.me/2449XXXXXXXX" quando confirmado
  rating: { value: "5,0", count: 2 },
  tagline: "Sabor para todos os momentos.",
};

const q = encodeURIComponent(`${BUSINESS.address}`);
export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${q}`;
export const MAPS_EMBED = `https://maps.google.com/maps?q=${q}&z=16&output=embed`;
