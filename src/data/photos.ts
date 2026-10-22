// Fotografias reais do estabelecimento (melhoradas em nitidez e cor, sem IA).
import p00 from "@/assets/real/foto-00.jpg.asset.json";
import p01 from "@/assets/real/foto-01.jpg.asset.json";
import p02 from "@/assets/real/foto-02.jpg.asset.json";
import p03 from "@/assets/real/foto-03.jpg.asset.json";
import p04 from "@/assets/real/foto-04.jpg.asset.json";
import p05 from "@/assets/real/foto-05.jpg.asset.json";
import p06 from "@/assets/real/foto-06.jpg.asset.json";
import p07 from "@/assets/real/foto-07.jpg.asset.json";
import p08 from "@/assets/real/foto-08.jpg.asset.json";
import p09 from "@/assets/real/foto-09.jpg.asset.json";
import p10 from "@/assets/real/foto-10.jpg.asset.json";
import p11 from "@/assets/real/foto-11.jpg.asset.json";
import p12 from "@/assets/real/foto-12.jpg.asset.json";
import p13 from "@/assets/real/foto-13.jpg.asset.json";
import p14 from "@/assets/real/foto-14.jpg.asset.json";
import p15 from "@/assets/real/foto-15.jpg.asset.json";
import cachorro from "@/assets/real/cachorro.jpg.asset.json";
import picoleImg from "@/assets/produtos/picole.jpg.asset.json";
import pipocaImg from "@/assets/produtos/pipoca.jpg.asset.json";
import speedImg from "@/assets/produtos/speed.jpg.asset.json";
import tresXImg from "@/assets/produtos/energetica-3x.jpg.asset.json";
import agua from "@/assets/bebidas/agua.jpg.asset.json";
import garrafas from "@/assets/bebidas/garrafas.jpg.asset.json";
import top from "@/assets/bebidas/top.jpg.asset.json";
import yala from "@/assets/bebidas/yala.jpg.asset.json";
import latas from "@/assets/bebidas/latas.jpg.asset.json";

export const PHOTOS = {
  fachada: p00.url,
  fachadaClientes: p01.url,
  wrap: p02.url,
  sandes: p03.url,
  hamburguerTabua: p04.url,
  refeicaoTakeaway: p05.url,
  hamburguerCola: p06.url,
  pratoBatatas: p07.url,
  saladaBatatas: p08.url,
  mesaRefeicao: p09.url,
  geladosClientes: p10.url,
  algodaoDoce: p11.url,
  geladosCone: p12.url,
  pratoCompleto: p13.url,
  hamburguerServido: p14.url,
  carneBatatas: p15.url,
  cachorro: cachorro.url,
};

// Imagens ilustrativas das marcas de bebidas e embalagens (não fotografias do espaço).
export const PRODUTOS = {
  picole: picoleImg.url,
  pipoca: pipocaImg.url,
  speed: speedImg.url,
  tresX: tresXImg.url,
};

export const BEBIDAS = {
  agua: agua.url,
  garrafas: garrafas.url,
  top: top.url,
  yala: yala.url,
  latas: latas.url,
};

export const GALLERY = [
  { src: PHOTOS.fachada, alt: "Fachada da Geladaria e Hamburgaria Edmundo Abel à noite" },
  { src: PHOTOS.hamburguerTabua, alt: "Hambúrguer servido em tábua" },
  { src: PHOTOS.pratoCompleto, alt: "Prato com batatas fritas, frango e salada" },
  { src: PHOTOS.geladosClientes, alt: "Clientes com gelados" },
  { src: PHOTOS.hamburguerCola, alt: "Hambúrguer com bebida" },
  { src: PHOTOS.saladaBatatas, alt: "Salada e batatas com molho" },
  { src: PHOTOS.algodaoDoce, alt: "Criança com algodão-doce" },
  { src: PHOTOS.refeicaoTakeaway, alt: "Refeição para levar" },
  { src: PHOTOS.sandes, alt: "Sandes com molhos" },
  { src: PHOTOS.wrap, alt: "Wrap com bebida" },
  { src: PHOTOS.fachadaClientes, alt: "Clientes à porta do estabelecimento" },
  { src: PHOTOS.carneBatatas, alt: "Carne com batatas e salada" },
  { src: PHOTOS.pratoBatatas, alt: "Prato com batatas e salada" },
  { src: PHOTOS.mesaRefeicao, alt: "Mesa com refeição" },
  { src: PHOTOS.geladosCone, alt: "Gelados em cone" },
  { src: PHOTOS.hamburguerServido, alt: "Hambúrguer servido pela equipa" },
];
