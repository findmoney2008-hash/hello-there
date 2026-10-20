import { PHOTOS } from "@/data/photos";

export type Category = "Hambúrgueres" | "Refeições" | "Acompanhamentos" | "Gelados e sobremesas" | "Bebidas";
export const CATEGORIES: Category[] = ["Hambúrgueres", "Refeições", "Acompanhamentos", "Gelados e sobremesas", "Bebidas"];

export type Product = {
  name: string;
  description: string;
  category: Category;
  image: string;
  price: string | null; // null = preço por confirmar
  placeholder: boolean; // true = exemplo provisório, substituir pelo menu real
};

// EXEMPLOS PROVISÓRIOS — substituir pelo menu real do estabelecimento.
export const PRODUCTS: Product[] = [
  { name: "Hambúrguer clássico", description: "Carne grelhada, alface e tomate em pão macio.", category: "Hambúrgueres", image: PHOTOS.hamburguerTabua, price: null, placeholder: false },
  { name: "Hambúrguer com queijo", description: "O clássico com queijo derretido.", category: "Hambúrgueres", image: PHOTOS.hamburguerCola, price: null, placeholder: false },
  { name: "Hambúrguer especial", description: "Uma combinação generosa para quem tem muita fome.", category: "Hambúrgueres", image: PHOTOS.hamburguerServido, price: null, placeholder: false },
  { name: "Carne grelhada com batatas e salada", description: "Refeição completa e saborosa.", category: "Refeições", image: PHOTOS.carneBatatas, price: null, placeholder: false },
  { name: "Batatas fritas crocantes", description: "Douradas e estaladiças.", category: "Acompanhamentos", image: PHOTOS.pratoCompleto, price: null, placeholder: false },
  { name: "Gelados variados", description: "Vários sabores para refrescar o dia.", category: "Gelados e sobremesas", image: PHOTOS.geladosCone, price: null, placeholder: false },
  { name: "Refrigerantes e bebidas", description: "Bebidas frescas para acompanhar.", category: "Bebidas", image: PHOTOS.wrap, price: null, placeholder: false },
];
