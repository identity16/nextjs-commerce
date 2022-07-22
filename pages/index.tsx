import type { NextPage } from 'next';
import { FeaturedProduct } from '../types/product';
import { getFeaturedProducts } from '../utils/product';

interface HomeProps {
  featuredProductData: FeaturedProduct[];
}

const Home: NextPage<HomeProps> = ({ featuredProductData }) => {
  return (
    <ul>
      {featuredProductData.map(({ id, items }) => (
        <li key={id}>
          <strong>{id}</strong>
          <ul>
            {items.map((item) => (
              <li key={item.id}>
                <p>{JSON.stringify(item)}</p>
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
};

export default Home;

export async function getServerSideProps() {
  const featuredProductData = getFeaturedProducts();
  return {
    props: {
      featuredProductData,
    },
  };
}
