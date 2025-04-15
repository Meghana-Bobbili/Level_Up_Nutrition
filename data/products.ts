export interface Product {
  id: string
  name: string
  description: string
  price: number
  image: string
  category: string
  goal: string
  level: string
  rating: number
  reviews: number
  stock?: 'low' | 'out' | 'in'
}

export const products: Product[] = [
  {
    id: 'whey-protein-isolate',
    name: 'Premium Whey Protein Isolate',
    description: 'High-quality whey protein isolate with 27g protein per serving. Perfect for muscle recovery and growth.',
    price: 59.99,
    image: '/products/whey-protein.jpg',
    category: 'Protein',
    goal: 'Muscle Growth',
    level: 'All',
    rating: 4.8,
    reviews: 245,
    stock: 'in'
  },
  {
    id: 'pre-workout-energy',
    name: 'Pre-Workout Energy Formula',
    description: 'Advanced pre-workout formula for enhanced energy, focus, and performance during training.',
    price: 39.99,
    image: '/products/pre-workout.jpg',
    category: 'Pre-Workout',
    goal: 'Performance',
    level: 'Intermediate',
    rating: 4.6,
    reviews: 189,
    stock: 'low'
  },
  {
    id: 'bcaa-recovery',
    name: 'BCAA Recovery Complex',
    description: 'Essential branched-chain amino acids for improved recovery and reduced muscle soreness.',
    price: 34.99,
    image: '/products/bcaa.jpg',
    category: 'Amino Acids',
    goal: 'Recovery',
    level: 'All',
    rating: 4.7,
    reviews: 156,
    stock: 'in'
  }
] 