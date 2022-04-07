import HomeSlider from '../components/molecule/homeslider/HomeSlider';
import OrganicShopping from '../components/atom/orgshopping/OrganicShopping';
import FeatBackground from '../components/molecule/featurebackground/FeatBackground';
import PopularBg from '../components/molecule/PopularBg';
import QuickDiscount from '../components/molecule/quickdiscount/QuickDiscount';
import { useEffect } from 'react';

const Home = () => {
  useEffect(() => {
    document.title = 'Cypher Store';
  }, []);

  return (
    <div className="home">
      <HomeSlider />
      <OrganicShopping />
      <FeatBackground />
      <PopularBg />
      <QuickDiscount />
    </div>
  );
};
export default Home;
