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
import p16 from "@/assets/real/foto-16.jpg.asset.json";
import p17 from "@/assets/real/foto-17.jpg.asset.json";
import p18 from "@/assets/real/foto-18.jpg.asset.json";
import p19 from "@/assets/real/foto-19.jpg.asset.json";
import p20 from "@/assets/real/foto-20.jpg.asset.json";
import p21 from "@/assets/real/foto-21.jpg.asset.json";
import p22 from "@/assets/real/foto-22.jpg.asset.json";
import p23 from "@/assets/real/foto-23.jpg.asset.json";
import p24 from "@/assets/real/foto-24.jpg.asset.json";
import p25 from "@/assets/real/foto-25.jpg.asset.json";
import p26 from "@/assets/real/foto-26.jpg.asset.json";
import p27 from "@/assets/real/foto-27.jpg.asset.json";
import p28 from "@/assets/real/foto-28.jpg.asset.json";
import p29 from "@/assets/real/foto-29.jpg.asset.json";
import p30 from "@/assets/real/foto-30.jpg.asset.json";
import p31 from "@/assets/real/foto-31.jpg.asset.json";
import p32 from "@/assets/real/foto-32.jpg.asset.json";
import p33 from "@/assets/real/foto-33.jpg.asset.json";
import p34 from "@/assets/real/foto-34.jpg.asset.json";
import p35 from "@/assets/real/foto-35.jpg.asset.json";
import p36 from "@/assets/real/foto-36.jpg.asset.json";
import p37 from "@/assets/real/foto-37.jpg.asset.json";
import p38 from "@/assets/real/foto-38.jpg.asset.json";
import p39 from "@/assets/real/foto-39.jpg.asset.json";
import p40 from "@/assets/real/foto-40.jpg.asset.json";
import p41 from "@/assets/real/foto-41.jpg.asset.json";
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
import doseBatataImg from "@/assets/acompanhamentos/dose-de-batata.jpg";

export const PHOTOS = {
  fachada: p00.url,
  fachadaClientes: p01.url,
  wrap: p02.url,
  sandes: p03.url,
  hamburguerTabua: p04.url,
  refeicaoTakeaway: p05.url,
  hamburguerCola: p06.url,
  pratoBatatas: doseBatataImg,
  doseBatata: doseBatataImg,
  saladaBatatas: p08.url,
  mesaRefeicao: p09.url,
  geladosClientes: p10.url,
  algodaoDoce: p11.url,
  geladosCone: p12.url,
  pratoCompleto: p13.url,
  hamburguerServido: p14.url,
  carneBatatas: p15.url,
  cachorro: cachorro.url,
  menuHamburgueres: p16.url,
  menuBebidas: p17.url,
  menuGelados: p18.url,
  menuRefeicoes: p19.url,
  geladoConeMesa: p20.url,
  refeicaoCarneBatatas: p21.url,
  refeicaoEmbalada: p22.url,
  refeicaoLevar: p23.url,
  saladaGeladoBatatas: p24.url,
  tabuleiroSalada: p25.url,
  saladaGelado: p26.url,
  mesaSalada: p27.url,
  refeicoesServidas: p28.url,
  saladaBatatasServidas: p29.url,
  saladaBatatasGelado: p30.url,
  refeicaoMesa: p31.url,
  clientesMesa: p32.url,
  clientesRefeicao: p33.url,
  algodaoDoceTarde: p34.url,
  mesaRefeicoes: p35.url,
  clienteGelado: p36.url,
  clienteGeladoExterior: p37.url,
  algodaoDoceNoite: p38.url,
  ambienteNoite: p39.url,
  meninaAlgodaoDoce: p40.url,
  meninaAlgodaoDoce2: p41.url,
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
  { src: PHOTOS.pratoBatatas, alt: "Dose de batata frita com molho" },
  { src: PHOTOS.mesaRefeicao, alt: "Mesa com refeição" },
  { src: PHOTOS.geladosCone, alt: "Gelados em cone" },
  { src: PHOTOS.hamburguerServido, alt: "Hambúrguer servido pela equipa" },
  { src: PHOTOS.menuHamburgueres, alt: "Menu afixado: hambúrgueres e preços" },
  { src: PHOTOS.menuBebidas, alt: "Lista de bebidas com preços" },
  { src: PHOTOS.menuGelados, alt: "Menu afixado: gelados e doces" },
  { src: PHOTOS.menuRefeicoes, alt: "Menu afixado: refeições" },
  { src: PHOTOS.geladoConeMesa, alt: "Gelado em cone servido à mesa" },
  { src: PHOTOS.refeicaoCarneBatatas, alt: "Refeição com carne, batatas e salada" },
  { src: PHOTOS.refeicaoEmbalada, alt: "Refeição embalada com carne e batatas" },
  { src: PHOTOS.refeicaoLevar, alt: "Refeição para levar: carne e batatas" },
  { src: PHOTOS.saladaGeladoBatatas, alt: "Salada, batatas e gelado à mesa" },
  { src: PHOTOS.tabuleiroSalada, alt: "Tabuleiro com salada e batatas" },
  { src: PHOTOS.saladaGelado, alt: "Salada, gelado e batatas à mesa" },
  { src: PHOTOS.mesaSalada, alt: "Mesa com salada e batatas" },
  { src: PHOTOS.refeicoesServidas, alt: "Refeições servidas à mesa" },
  { src: PHOTOS.saladaBatatasServidas, alt: "Salada e batatas servidas" },
  { src: PHOTOS.saladaBatatasGelado, alt: "Salada, batatas fritas e gelado" },
  { src: PHOTOS.refeicaoMesa, alt: "Refeição à mesa com salada e batatas" },
  { src: PHOTOS.clientesMesa, alt: "Clientes à mesa" },
  { src: PHOTOS.clientesRefeicao, alt: "Clientes a saborear a refeição" },
  { src: PHOTOS.algodaoDoceTarde, alt: "Algodão-doce ao entardecer" },
  { src: PHOTOS.mesaRefeicoes, alt: "Mesa com refeições servidas" },
  { src: PHOTOS.clienteGelado, alt: "Cliente com gelado" },
  { src: PHOTOS.clienteGeladoExterior, alt: "Cliente com gelado no exterior" },
  { src: PHOTOS.algodaoDoceNoite, alt: "Clientes com algodão-doce à noite" },
  { src: PHOTOS.ambienteNoite, alt: "Ambiente à noite: clientes à mesa" },
  { src: PHOTOS.meninaAlgodaoDoce, alt: "Menina com algodão-doce" },
  { src: PHOTOS.meninaAlgodaoDoce2, alt: "Menina a saborear algodão-doce" },
];
