export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  series: string;
  subcategory: string;
  goal: string;
  level: string;
  image: string;
  rating: number;
  reviews: number;
  inStock: boolean;
  flavors: string[];
  details: string[];
  nutritionFacts: {
    servingSize: string;
    servingsPerContainer: number;
    calories: number;
    protein: number;
    carbs: number;
    fat: number;
  };
}

export const products: Product[] = [
  {
    id: 1,
    name: 'Elite Whey+',
    description: 'Fuel your muscles with 25g of clean whey protein per scoop.',
    price: 49.99,
    category: 'LevelUp Whey Series',
    series: 'LevelUp Whey Series',
    subcategory: 'Whey Concentrate',
    goal: 'Muscle Gain',
    level: 'Pro',
    image: '/products/whey.jpg',
    rating: 4.8,
    reviews: 124,
    inStock: true,
    flavors: ['Vanilla', 'Chocolate'],
    details: ['Gluten-free', 'Non-GMO'],
    nutritionFacts: {
      servingSize: '30g',
      servingsPerContainer: 24,
      calories: 150,
      protein: 25,
      carbs: 5,
      fat: 5
    }
  },
  {
    id: 2,
    name: 'Recovery Aminos',
    description: 'Essential amino acids for faster recovery and reduced muscle soreness.',
    price: 39.99,
    category: 'LevelUp Recovery Series',
    series: 'LevelUp Recovery Series',
    subcategory: 'L-Glutamine',
    goal: 'Recovery',
    level: 'Intermediate',
    image: '/products/whey.jpg',
    rating: 4.6,
    reviews: 89,
    inStock: true,
    flavors: ['Lemon', 'Berry'],
    details: ['Gluten-free', 'Non-GMO'],
    nutritionFacts: {
      servingSize: '15g',
      servingsPerContainer: 30,
      calories: 100,
      protein: 10,
      carbs: 5,
      fat: 0
    }
  },
  {
    id: 3,
    name: 'ElectroFuel',
    description: 'Advanced electrolyte formula with 5 key minerals for optimal hydration.',
    price: 29.99,
    category: 'LevelUp Hydration Series',
    series: 'LevelUp Hydration Series',
    subcategory: 'Electrolytes',
    goal: 'Energy',
    level: 'Beginner',
    image: '/products/whey.jpg',
    rating: 4.9,
    reviews: 156,
    inStock: true,
    flavors: ['Lemon', 'Mango'],
    details: ['Gluten-free', 'Non-GMO'],
    nutritionFacts: {
      servingSize: '20g',
      servingsPerContainer: 20,
      calories: 100,
      protein: 0,
      carbs: 20,
      fat: 0
    }
  },
  {
    id: 4,
    name: 'Creatine Monohydrate',
    description: 'Pure creatine monohydrate for increased strength and power output.',
    price: 24.99,
    category: 'LevelUp Performance Series',
    series: 'LevelUp Performance Series',
    subcategory: 'Creatine Monohydrate',
    goal: 'Performance',
    level: 'Pro',
    image: '/products/whey.jpg',
    rating: 4.7,
    reviews: 203,
    inStock: true,
    flavors: ['Unflavored'],
    details: ['Gluten-free', 'Non-GMO'],
    nutritionFacts: {
      servingSize: '3g',
      servingsPerContainer: 100,
      calories: 0,
      protein: 0,
      carbs: 0,
      fat: 0
    }
  },
  {
    id: 5,
    name: 'Omega-3 Complex',
    description: 'High-potency fish oil with EPA and DHA for joint and heart health.',
    price: 34.99,
    category: 'LevelUp Daily Series',
    series: 'LevelUp Daily Series',
    subcategory: 'Omega-3',
    goal: 'Recovery',
    level: 'Intermediate',
    image: '/products/whey.jpg',
    rating: 4.5,
    reviews: 67,
    inStock: true,
    flavors: ['Taste of the Sea'],
    details: ['Gluten-free', 'Non-GMO', 'High EPA/DHA'],
    nutritionFacts: {
      servingSize: '1g',
      servingsPerContainer: 60,
      calories: 10,
      protein: 0,
      carbs: 0,
      fat: 1
    }
  },
  {
    id: 6,
    name: 'Pre-Workout Elite',
    description: 'Advanced pre-workout formula with clinically dosed ingredients.',
    price: 44.99,
    category: 'LevelUp Performance Series',
    series: 'LevelUp Performance Series',
    subcategory: 'Pre-workout',
    goal: 'Energy',
    level: 'Pro',
    image: '/products/whey.jpg',
    rating: 4.8,
    reviews: 178,
    inStock: true,
    flavors: ['Blue Raspberry', 'Fruit Punch', 'Watermelon'],
    details: ['Sugar-free', 'Beta-Alanine', 'Caffeine'],
    nutritionFacts: {
      servingSize: '15g',
      servingsPerContainer: 30,
      calories: 5,
      protein: 0,
      carbs: 1,
      fat: 0
    }
  }
]; 