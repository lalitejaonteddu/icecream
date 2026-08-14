export interface MenuItem {
  id: string;
  name: string;
  category: 'bestsellers' | 'lassis' | 'desserts' | 'juices';
  price: number;
  description: string;
  image: string;
  badge?: string;
  rating: number;
  popular?: boolean;
  ingredients?: string[];
}

export const BEST_SELLERS: MenuItem[] = [
  {
    id: 'nutty-hub',
    name: 'Nutty Hub',
    category: 'bestsellers',
    price: 220,
    description: 'Loaded dry-fruit feast topped with roasted almonds, cashews, pistachios, honey drizzle & dual scoops of vanilla bean gelato.',
    image: '/assets/shelves_freezers.jpg',
    badge: '👑 #1 Best Seller',
    rating: 4.9,
    popular: true,
    ingredients: ['Roasted Almonds', 'Cashews', 'Honey', 'Vanilla Gelato']
  },
  {
    id: 'fruit-beast',
    name: 'Fruit Beast',
    category: 'bestsellers',
    price: 260,
    description: 'Monster bowl overflowing with fresh dragon fruit, kiwi, mango chunks, pomegranate, and cold vanilla cream.',
    image: '/assets/storefront.jpg',
    badge: '🔥 Trending',
    rating: 4.9,
    popular: true,
    ingredients: ['Dragon Fruit', 'Kiwi', 'Mango Chunks', 'Vanilla Cream']
  },
  {
    id: 'chocolate-overload',
    name: 'Chocolate Overload',
    category: 'bestsellers',
    price: 240,
    description: 'Dark Belgian chocolate ice cream centered with warm gooey brownie chunks, choco-chips, and hot chocolate fudge.',
    image: '/assets/counter_interior.jpg',
    badge: '⭐ Chef\'s Choice',
    rating: 4.8,
    popular: true,
    ingredients: ['Belgian Dark Chocolate', 'Brownie', 'Choco-chips', 'Fudge']
  },
  {
    id: 'you-must-be-crazy',
    name: 'You Must Be Crazy',
    category: 'bestsellers',
    price: 280,
    description: 'Wild multi-flavor surprise sundae with popping candy, waffle crisp, rainbow sprinkles & tri-color fruit syrup.',
    image: '/assets/cup_pyramids.jpg',
    badge: '🎉 Must Try',
    rating: 5.0,
    popular: true,
    ingredients: ['Popping Candy', 'Waffle Crisp', 'Sprinkles', 'Fruit Syrup']
  },
  {
    id: 'bdc-pastry',
    name: 'BDC Pastry',
    category: 'bestsellers',
    price: 190,
    description: 'Belgian Double Chocolate Pastry paired with a silky scoop of Madagascar vanilla bean ice cream.',
    image: '/assets/menu_board.jpg',
    badge: '💎 House Special',
    rating: 4.8,
    popular: true,
    ingredients: ['Double Chocolate Pastry', 'Vanilla Bean Scoop', 'Cocoa Powder']
  }
];

export const FULL_MENU: MenuItem[] = [
  // Best Sellers
  ...BEST_SELLERS,

  // Lassis
  {
    id: 'thiranga-lassi',
    name: 'Thiranga Lassi',
    category: 'lassis',
    price: 120,
    description: 'Signature tri-color layered thick Lassi featuring pistachio green, classic sweet curd, and saffron mango flavors.',
    image: '/assets/cup_pyramids.jpg',
    badge: '🌈 Tri-Color Special',
    rating: 4.9
  },
  {
    id: 'sweet-lassi',
    name: 'Sweet Lassi',
    category: 'lassis',
    price: 90,
    description: 'Traditional churned sweet yoghurt drink infused with fresh cardamom and malai.',
    image: '/assets/counter_interior.jpg',
    badge: 'Classic',
    rating: 4.7
  },
  {
    id: 'salt-lassi',
    name: 'Salt Lassi',
    category: 'lassis',
    price: 90,
    description: 'Refreshing savory Lassi spiced with roasted cumin, rock salt & fresh coriander.',
    image: '/assets/storefront.jpg',
    rating: 4.6
  },
  {
    id: 'punjabi-lassi',
    name: 'Punjabi Lassi',
    category: 'lassis',
    price: 120,
    description: 'Extra thick malai-topped Punjabi style creamy sweet yoghurt.',
    image: '/assets/shelves_freezers.jpg',
    badge: 'Extra Creamy',
    rating: 4.8
  },
  {
    id: 'badam-lassi',
    name: 'Badam Lassi',
    category: 'lassis',
    price: 120,
    description: 'Nutritious almond infused lassi blended with crushed nuts & saffron strands.',
    image: '/assets/menu_board.jpg',
    rating: 4.7
  },
  {
    id: 'patiyala-lassi',
    name: 'Patiyala Lassi',
    category: 'lassis',
    price: 120,
    description: 'King-sized thick sweet lassi served in traditional style.',
    image: '/assets/cup_pyramids.jpg',
    rating: 4.8
  },
  {
    id: 'nawabi-lassi',
    name: 'Nawabi Lassi',
    category: 'lassis',
    price: 120,
    description: 'Royal lassi prepared with saffron, kewra water, and crushed pistachios.',
    image: '/assets/counter_interior.jpg',
    badge: 'Royal',
    rating: 4.9
  },
  {
    id: 'mango-lassi',
    name: 'Mango Lassi',
    category: 'lassis',
    price: 120,
    description: 'Rich Alphonso mango pulp churned with velvety fresh yoghurt.',
    image: '/assets/storefront.jpg',
    badge: '🥭 Summer Pick',
    rating: 4.9
  },

  // Desserts
  {
    id: 'apricot-delight',
    name: 'Apricot Delight',
    category: 'desserts',
    price: 250,
    description: 'Signature Hyderabadi sweet delicacy featuring stewed sweet apricots, rich cream layers, and velvety vanilla scoop.',
    image: '/assets/storefront.jpg',
    badge: '🔥 Hyderabadi Legend',
    rating: 4.9
  },
  {
    id: 'kurbani-ka-meeta-ice-cream',
    name: 'Kurbani ka Meeta with Ice Cream',
    category: 'desserts',
    price: 190,
    description: 'Authentic Qurbani sweet stewed dried apricots paired with a rich vanilla ice cream scoop.',
    image: '/assets/counter_interior.jpg',
    badge: '👑 Heritage',
    rating: 4.9
  },
  {
    id: 'double-ka-meeta',
    name: 'Double ka Meeta',
    category: 'desserts',
    price: 160,
    description: 'Crisp ghee-fried bread soaked in saffron cardamom rabri syrup, topped with almonds.',
    image: '/assets/shelves_freezers.jpg',
    rating: 4.7
  },
  {
    id: 'kaddu-ka-kheer',
    name: 'Kaddu ka Kheer',
    category: 'desserts',
    price: 160,
    description: 'Traditional rich bottle-gourd milk pudding cooked with sago, khoya & cashews.',
    image: '/assets/menu_board.jpg',
    rating: 4.8
  },

  // Fresh Fruit Juices
  {
    id: 'pomegranate-juice',
    name: 'Pomegranate Juice',
    category: 'juices',
    price: 180,
    description: 'Cold-pressed 100% pure fresh pomegranate juice packed with natural antioxidants.',
    image: '/assets/menu_board.jpg',
    badge: '100% Pure',
    rating: 4.9
  },
  {
    id: 'watermelon-juice',
    name: 'Watermelon Juice',
    category: 'juices',
    price: 180,
    description: 'Hydrating fresh cold-pressed watermelon juice served chilled.',
    image: '/assets/storefront.jpg',
    rating: 4.7
  },
  {
    id: 'kiwi-juice',
    name: 'Kiwi Juice',
    category: 'juices',
    price: 180,
    description: 'Tangy Vitamin-C rich fresh green kiwi juice.',
    image: '/assets/cup_pyramids.jpg',
    rating: 4.8
  },
  {
    id: 'fruit-punch',
    name: 'Fruit Punch',
    category: 'juices',
    price: 180,
    description: 'Exotic blend of fresh tropical fruits with a hint of mint.',
    image: '/assets/counter_interior.jpg',
    badge: 'Popular',
    rating: 4.8
  },
  {
    id: 'fruit-bowl',
    name: 'Fruit Bowl',
    category: 'juices',
    price: 250,
    description: 'Assorted freshly chopped seasonal fruits with natural honey glaze.',
    image: '/assets/shelves_freezers.jpg',
    rating: 4.9
  },
  {
    id: 'fresh-lime-soda',
    name: 'Fresh Lime Soda',
    category: 'juices',
    price: 80,
    description: 'Sparkling fizzy chilled soda with fresh lime juice.',
    image: '/assets/storefront.jpg',
    rating: 4.6
  }
];
