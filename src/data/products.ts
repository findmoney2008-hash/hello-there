import { BEBIDAS, PHOTOS, PRODUTOS } from "@/data/photos";

export type Category = "Hambúrgueres e sandes" | "Refeições" | "Acompanhamentos" | "Gelados e doces" | "Bebidas";
export const CATEGORIES: Category[] = ["Hambúrgueres e sandes", "Refeições", "Acompanhamentos", "Gelados e doces", "Bebidas"];

export type Product = {
  name: string;
  description: string;
  category: Category;
  image: string | null; // null = sem fotografia real
  price: string | null; // null = preço por confirmar
  placeholder: boolean;
};

// Menu e preços conforme os cartazes do estabelecimento (outubro 2026).
export const PRODUCTS: Product[] = [
  { name: "Hambúrguer", description: "Hambúrguer servido em pão.", category: "Hambúrgueres e sandes", image: PHOTOS.hamburguerTabua, price: "2 000 Kz", placeholder: false },
  { name: "Faíta", description: "Wrap recheado.", category: "Hambúrgueres e sandes", image: PHOTOS.wrap, price: "2 500 Kz", placeholder: false },
  { name: "Cachorro", description: "Cachorro-quente.", category: "Hambúrgueres e sandes", image: PHOTOS.cachorro, price: "1 500 Kz", placeholder: false },
  { name: "Churrasco", description: "Refeição de churrasco.", category: "Refeições", image: PHOTOS.carneBatatas, price: "5 000 Kz", placeholder: false },
  { name: "Dose de batata e frango panado", description: "Batatas fritas com frango panado.", category: "Refeições", image: PHOTOS.pratoCompleto, price: "4 000 Kz", placeholder: false },
  { name: "Refeição para levar", description: "Carne com batatas e salada, em caixa para levar.", category: "Refeições", image: PHOTOS.refeicaoTakeaway, price: "5 000 Kz", placeholder: false },
  { name: "Dose de batata", description: "Batatas fritas.", category: "Acompanhamentos", image: PHOTOS.pratoBatatas, price: "1 000 Kz", placeholder: false },
  { name: "Gelado", description: "Gelado em cone, vários tamanhos.", category: "Gelados e doces", image: PHOTOS.geladosCone, price: "500 Kz / 700 Kz", placeholder: false },
  { name: "Picolé", description: "Gelado de pau.", category: "Gelados e doces", image: PRODUTOS.picole, price: "400 Kz", placeholder: false },
  { name: "Algodão doce", description: "Algodão doce.", category: "Gelados e doces", image: PHOTOS.algodaoDoce, price: "300 Kz", placeholder: false },
  { name: "Pipoca", description: "Pipocas.", category: "Gelados e doces", image: PRODUTOS.pipoca, price: "100 Kz", placeholder: false },
  { name: "Água", description: "Garrafa de água.", category: "Bebidas", image: BEBIDAS.agua, price: "150 Kz", placeholder: false },
  { name: "Top", description: "Refrigerante em garrafa pequena.", category: "Bebidas", image: BEBIDAS.top, price: "350 Kz", placeholder: false },
  { name: "Yala", description: "Refrigerante em garrafa pequena.", category: "Bebidas", image: BEBIDAS.yala, price: "350 Kz", placeholder: false },
  { name: "Fanta / Coca-Cola / Sprite (garrafa)", description: "Refrigerante em garrafa.", category: "Bebidas", image: BEBIDAS.garrafas, price: "500 Kz", placeholder: false },
  { name: "Coca-Cola / Sumol / Pepsi / Compal (lata)", description: "Refrigerante ou sumo em lata.", category: "Bebidas", image: BEBIDAS.latas, price: "750 Kz", placeholder: false },
  { name: "Speed", description: "Bebida energética em lata.", category: "Bebidas", image: PRODUTOS.speed, price: "850 Kz", placeholder: false },
  { name: "3X", description: "Bebida energética em lata.", category: "Bebidas", image: PRODUTOS.tresX, price: "850 Kz", placeholder: false },
];
