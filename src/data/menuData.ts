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
    image: '/assets/nutty_hub_sundae.webp',
    badge: '👑 #1 Best Seller',
    rating: 4.9,
    popular: true,
    ingredients: ['Roasted Almonds', 'Cashews', 'Honey', 'Vanilla Gelato']
  },
  {
    id: 'fruit-beast',
    name: 'Fruit Feast',
    category: 'bestsellers',
    price: 260,
    description: 'Monster bowl overflowing with fresh dragon fruit, kiwi, mango chunks, pomegranate, and cold vanilla cream.',
    image: '/assets/fruit_beast_sundae.webp',
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
    image: 'https://images.unsplash.com/photo-1570197788417-0e82375c9371?auto=format&fit=crop&w=800&q=80',
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
    image: 'https://images.unsplash.com/photo-1557142046-c704a3adf364?auto=format&fit=crop&w=800&q=80',
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
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=800&q=80',
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
    price: 100,
    description: 'Signature tri-color layered thick Lassi featuring pistachio green, classic sweet curd, and saffron mango flavors.',
    image: '/assets/thiranga_lassi.webp',
    badge: '🌈 Tri-Color Special',
    rating: 4.9,
    ingredients: ['Pistachio', 'Sweet Curd', 'Mango Pulp', 'Saffron']
  },
  {
    id: 'sweet-lassi',
    name: 'Sweet Lassi',
    category: 'lassis',
    price: 80,
    description: 'Traditional churned sweet yoghurt drink infused with fresh cardamom and malai.',
    image: 'https://images.unsplash.com/photo-1571006682885-333e6f6630f9?auto=format&fit=crop&w=800&q=80',
    badge: 'Classic',
    rating: 4.7,
    ingredients: ['Fresh Yoghurt', 'Cardamom', 'Malai', 'Sugar']
  },
  {
    id: 'salt-lassi',
    name: 'Salt Lassi',
    category: 'lassis',
    price: 70,
    description: 'Refreshing savory Lassi spiced with roasted cumin, rock salt & fresh coriander.',
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80',
    rating: 4.6,
    ingredients: ['Yoghurt', 'Roasted Cumin', 'Rock Salt', 'Mint']
  },
  {
    id: 'punjabi-lassi',
    name: 'Punjabi Lassi',
    category: 'lassis',
    price: 100,
    description: 'Extra thick malai-topped Punjabi style creamy sweet yoghurt in tall glass.',
    image: 'https://images.unsplash.com/photo-1626078436896-e26090e96417?auto=format&fit=crop&w=800&q=80',
    badge: 'Extra Creamy',
    rating: 4.8,
    ingredients: ['Thick Yoghurt', 'Heavy Cream', 'Cardamom']
  },
  {
    id: 'badam-lassi',
    name: 'Badam Lassi',
    category: 'lassis',
    price: 100,
    description: 'Nutritious almond infused lassi blended with crushed nuts & saffron strands.',
    image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&q=80',
    badge: 'Saffron Badam',
    rating: 4.7,
    ingredients: ['Crushed Almonds', 'Saffron', 'Rich Milk', 'Pistachios']
  },
  {
    id: 'patiyala-lassi',
    name: 'Patiyala Lassi',
    category: 'lassis',
    price: 100,
    description: 'King-sized thick sweet lassi served in traditional style.',
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80',
    rating: 4.8,
    ingredients: ['Churned Yoghurt', 'Malai', 'Rose Essence']
  },
  {
    id: 'nawabi-lassi',
    name: 'Nawabi Lassi',
    category: 'lassis',
    price: 100,
    description: 'Royal lassi prepared with saffron, kewra water, and crushed pistachios.',
    image: 'https://images.unsplash.com/photo-1600718374662-0483d2b9da44?auto=format&fit=crop&w=800&q=80',
    badge: 'Royal',
    rating: 4.9,
    ingredients: ['Saffron', 'Kewra Water', 'Pistachios', 'Cream']
  },
  {
    id: 'mango-lassi',
    name: 'Mango Lassi',
    category: 'lassis',
    price: 100,
    description: 'Rich Alphonso mango pulp churned with velvety fresh yoghurt.',
    image: 'https://images.unsplash.com/photo-1546173159-315724a31696?auto=format&fit=crop&w=800&q=80',
    badge: '🥭 Summer Pick',
    rating: 4.9,
    ingredients: ['Alphonso Mango', 'Fresh Yoghurt', 'Cardamom']
  },

  // Desserts
  {
    id: 'apricot-delight',
    name: 'Apricot Delight',
    category: 'desserts',
    price: 250,
    description: 'Signature Hyderabadi sweet delicacy featuring stewed sweet apricots, rich cream layers, and velvety vanilla scoop.',
    image: 'https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?auto=format&fit=crop&w=800&q=80',
    badge: '🔥 Hyderabadi Legend',
    rating: 4.9,
    ingredients: ['Stewed Apricots', 'Fresh Cream', 'Vanilla Gelato']
  },
  {
    id: 'kurbani-ka-meeta-ice-cream',
    name: 'Kurbani ka Meeta with Ice Cream',
    category: 'desserts',
    price: 190,
    description: 'Authentic Qurbani sweet stewed dried apricots paired with a rich vanilla ice cream scoop.',
    image: 'https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=800&q=80',
    badge: '👑 Heritage',
    rating: 4.9,
    ingredients: ['Qurbani Apricots', 'Vanilla Bean Scoop', 'Almonds']
  },
  {
    id: 'double-ka-meeta',
    name: 'Double ka Meeta',
    category: 'desserts',
    price: 160,
    description: 'Crisp ghee-fried bread soaked in saffron cardamom rabri syrup, topped with almonds.',
    image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80',
    rating: 4.7,
    ingredients: ['Ghee Fried Bread', 'Saffron Rabri', 'Almonds', 'Cardamom']
  },
  {
    id: 'kaddu-ka-kheer',
    name: 'Kaddu ka Kheer',
    category: 'desserts',
    price: 160,
    description: 'Traditional rich bottle-gourd milk pudding cooked with sago, khoya & cashews.',
    image: 'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=800&q=80',
    rating: 4.8,
    ingredients: ['Bottle Gourd', 'Milk', 'Khoya', 'Cashews', 'Sago']
  },

  // Fresh Fruit Juices
  {
    id: 'pomegranate-juice',
    name: 'Pomegranate Juice',
    category: 'juices',
    price: 180,
    description: 'Cold-pressed 100% pure fresh pomegranate juice packed with natural antioxidants.',
    image: 'https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&fit=crop&w=800&q=80',
    badge: '100% Pure',
    rating: 4.9,
    ingredients: ['Fresh Pomegranate']
  },
  {
    id: 'watermelon-juice',
    name: 'Watermelon Juice',
    category: 'juices',
    price: 180,
    description: 'Hydrating fresh cold-pressed watermelon juice served chilled.',
    image: 'https://images.unsplash.com/photo-1589733955941-5eeaf752f6dd?auto=format&fit=crop&w=800&q=80',
    rating: 4.7,
    ingredients: ['Fresh Watermelon', 'Mint']
  },
  {
    id: 'kiwi-juice',
    name: 'Kiwi Juice',
    category: 'juices',
    price: 180,
    description: 'Tangy Vitamin-C rich fresh green kiwi juice.',
    image: 'https://images.unsplash.com/photo-1622597467836-f3285f2131b7?auto=format&fit=crop&w=800&q=80',
    rating: 4.8,
    ingredients: ['Fresh Green Kiwi', 'Lemon']
  },
  {
    id: 'fruit-punch',
    name: 'Fruit Punch',
    category: 'juices',
    price: 180,
    description: 'Exotic blend of fresh tropical fruits with a hint of mint.',
    image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80',
    badge: 'Popular',
    rating: 4.8,
    ingredients: ['Orange', 'Pineapple', 'Mango', 'Mint']
  },
  {
    id: 'fruit-bowl',
    name: 'Fruit Bowl',
    category: 'juices',
    price: 250,
    description: 'Assorted freshly chopped seasonal fruits with natural honey glaze.',
    image: 'https://images.unsplash.com/photo-1519996529931-28324d5a630e?auto=format&fit=crop&w=800&q=80',
    rating: 4.9,
    ingredients: ['Kiwi', 'Berry', 'Mango', 'Dragon Fruit', 'Honey']
  },
  {
    id: 'fresh-lime-soda',
    name: 'Fresh Lime Soda',
    category: 'juices',
    price: 80,
    description: 'Sparkling fizzy chilled soda with fresh lime juice.',
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80',
    rating: 4.6,
    ingredients: ['Fresh Lime', 'Sparkling Soda', 'Mint', 'Black Salt']
  }
];
