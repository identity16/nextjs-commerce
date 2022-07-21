import { Category } from './category';
import { Designer } from './designer';

export type Size = 'XS' | 'S' | 'M' | 'L' | 'XL';

export interface Product {
  id: number;
  name: string;
  price: number;
  images: string[];
  description: string;
  category: Category;
  designer: Designer;
  color?: string[];
  size?: Size[];
}
