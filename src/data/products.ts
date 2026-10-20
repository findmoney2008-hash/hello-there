import hero from "@/assets/hero-burger.jpg";
import classic from "@/assets/classic.jpg";
import meal from "@/assets/meal.jpg";
import fries from "@/assets/fries.jpg";
import icecream from "@/assets/icecream.jpg";
import drinks from "@/assets/drinks.jpg";

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
  { name: "Hambúrguer clássico", description: "Carne grelhada, alface e tomate em pão macio.", category: "Hambúrgueres", image: classic, price: null, placeholder: true },
  { name: "Hambúrguer com queijo", description: "O clássico com queijo derretido.", category: "Hambúrgueres", image: hero, price: null, placeholder: true },
  { name: "Hambúrguer especial", description: "Uma combinação generosa para quem tem muita fome.", category: "Hambúrgueres", image: hero, price: null, placeholder: true },
  { name: "Carne grelhada com batatas e salada", description: "Refeição completa e saborosa.", category: "Refeições", image: meal, price: null, placeholder: true },
  { name: "Batatas fritas crocantes", description: "Douradas e estaladiças.", category: "Acompanhamentos", image: fries, price: null, placeholder: true },
  { name: "Gelados variados", description: "Vários sabores para refrescar o dia.", category: "Gelados e sobremesas", image: icecream, price: null, placeholder: true },
  { name: "Refrigerantes e bebidas", description: "Bebidas frescas para acompanhar.", category: "Bebidas", image: drinks, price: null, placeholder: true },
];
