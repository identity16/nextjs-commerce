import products from '../data/product.json';
import { FeaturedProduct } from '../types/product';

export function getFeaturedProducts(): FeaturedProduct[] {
  const allProducts = products.data;

  return [
    {
      id: 'grid1',
      items: [allProducts[0], allProducts[1], allProducts[2]],
    },
    {
      id: 'marquee1',
      items: [allProducts[0], allProducts[2], allProducts[1]],
    },
    {
      id: 'grid2',
      items: [allProducts[0], allProducts[2], allProducts[1]],
    },
    {
      id: 'marquee2',
      items: [allProducts[3], allProducts[2], allProducts[1], allProducts[0]],
    },
  ];
}
