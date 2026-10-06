export const site = {
  name: "Pizzaria Sabor da Casa",
  shortName: "Sabor da Casa",
  eyebrow: "PIZZARIA • DELIVERY • SALÃO",
  heroTitle: "O SABOR QUE\nREÚNE TODO MUNDO.",
  heroText: "Pizza artesanal, ingredientes selecionados e aquele clima gostoso para aproveitar com quem você gosta.",
  badge: "PIZZAS • DELIVERY • RESERVAS",
  phone: "(00) 00000-0000",
  whatsapp: "5500000000000",
  address: "Rua Exemplo, 000 • Bairro • Cidade - UF",
  hours: "Terça a Domingo: 18:00 às 23:30",
  city: "Sua cidade - UF",
  founded: "20XX",
  mapEmbed: "",
  stats: [
    ["20+", "Sabores no cardápio"],
    ["100%", "Feita para compartilhar"],
    ["4,9", "Avaliação dos clientes"],
  ],
  rodizio: {
    enabled: true,
    title: "RODÍZIO DA CASA",
    price: "R$ 00,00",
    subtitle: "Pizzas salgadas e doces servidas quentinhas na mesa.",
    items: [
      "Sabores clássicos e especiais",
      "Pizzas doces inclusas",
      "Opções para toda a família",
      "Atendimento à mesa",
    ],
  },
  offer: {
    title: "HOJE É DIA DE PIZZA.",
    highlight: "2 PIZZAS GRANDES + 1 SOBREMESA",
    text: "Monte seu pedido com seus sabores favoritos e aproveite uma condição especial.",
    price: "R$ 00,00",
  },
} as const;

export const categories = [
  { title: "🍕 PIZZAS", description: "Massa leve e recheios generosos", image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=800&q=80" },
  { title: "🍝 MASSAS", description: "Receitas que combinam com a casa", image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=800&q=80" },
  { title: "🥗 ENTRADAS", description: "Para começar compartilhando", image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80" },
  { title: "🍖 ESPECIAIS", description: "Pratos e combinações da casa", image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80" },
  { title: "🍰 SOBREMESAS", description: "Um doce para fechar bem", image: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&w=800&q=80" },
] as const;

export const menu = [
  { name: "Margherita Especial", category: "Pizza", description: "Molho de tomate, muçarela, tomate fresco e manjericão.", price: "R$ 00,00", image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80" },
  { name: "Calabresa da Casa", category: "Pizza", description: "Muçarela, calabresa, cebola roxa e orégano.", price: "R$ 00,00", image: "https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?auto=format&fit=crop&w=600&q=80" },
  { name: "Frango Cremoso", category: "Pizza", description: "Frango desfiado, molho especial e creme de queijo.", price: "R$ 00,00", image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=600&q=80" },
  { name: "Combo da Casa", category: "Especial", description: "Uma seleção para compartilhar com a família.", price: "R$ 00,00", image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=600&q=80" },
  { name: "Chocolate com Morango", category: "Pizza Doce", description: "Massa crocante, chocolate e morangos frescos.", price: "R$ 00,00", image: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&w=600&q=80" },
  { name: "Salada Especial", category: "Entrada", description: "Folhas, ingredientes frescos e molho da casa.", price: "R$ 00,00", image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80" },
] as const;

export const gallery = [
  ["Pizza artesanal", "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1200&q=80", "lg:col-span-2 lg:row-span-2 h-[420px]"],
  ["Pizza especial", "https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?auto=format&fit=crop&w=1200&q=80", "h-52"],
  ["Ingredientes frescos", "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=1200&q=80", "h-52"],
  ["Sobremesa", "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&w=1200&q=80", "h-52"],
  ["Ambiente", "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80", "h-52"],
] as const;
