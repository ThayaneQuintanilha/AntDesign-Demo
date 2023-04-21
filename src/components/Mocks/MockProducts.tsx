interface Product {
  id: number,
  name: string,
  price: number,
  image: string,
  description: string,
  category: string,
}

const product: Product[] = [
  {
    id: 1,
    name: "Nescau 2.0",
    price: 8.49,
    image: "https://images-americanas.b2w.io/produtos/01/00/img7/01/00/item/6911/7/6911726_1GG.jpg",
    description: "Nescau 2.0 é uma evolução do Nescau que todo mundo adora!",
    category: "Alimento",
  },
  {
    id: 2,
    name: "Wafer Piraquê",
    price: 4.99,
    image: "https://images-americanas.b2w.io/produtos/104903984/imagens/biscoito-wafer-piraque-chocolate-pacote-160-g/104903986_1_large.jpg",
    description: "Biscoito Wafer Piraquê Chocolate Pacote 160 G",
    category: "Alimento",
  },
  {
    id: 3,
    name: "Arroz Branco Camil",
    price: 16.89,
    image: "https://images-americanas.b2w.io/produtos/5862169272/imagens/arroz-branco-reserva-especial-tipo-1-camil-1kg/5862169272_1_large.jpg",
    description: "Camil criou o Arroz Reserva Especial Camil. Todo ano, selecionamos o nosso melhor arroz.",
    category: "Alimento",
  },
  {
    id: 4,
    name: "Feijão Branco Camil",
    price: 15.19,
    image: "https://images-americanas.b2w.io/produtos/3323921411/imagens/feijao-branco-camil-500g/3323921411_1_large.jpg",
    description: "Feijão Branco Camil - 500g Esse grão de cor branca, tamanho grande e textura macia e cremosa tem um sabor único!",
    category: "Alimento",
  },
  {
    id: 5,
    name: "Chcolate m&m",
    price: 9.99,
    image: "https://static3.tcdn.com.br/img/img_prod/779654/confeito_chocolate_mem_s_120g_crispy_pouch_869389_1_299641c35f7b7ff9b7616a1aef434bf6.jpg",
    description: "Confeitos de chocolate ao leite com flocos de arroz coloridos artificialmente.",
    category: "Alimento",
  },
  {
    id: 6,
    name: "Creme de leite piracanjuba",
    price: 3.79,
    image: "https://images-americanas.b2w.io/produtos/5865962031/imagens/creme-de-leite-piracanjuba-200g/5865962031_1_large.jpg",
    description: "Creme de leite piracanjuba 200G",
    category: "Alimento",
  },
]

export default product;
