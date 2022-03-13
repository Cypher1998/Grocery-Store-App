import HomeSlider from '../components/molecule/homeslider/HomeSlider';
import OrganicShopping from '../components/atom/orgshopping/OrganicShopping';
import FeatBackground from '../components/molecule/featurebackground/FeatBackground';
import PopularBg from '../components/molecule/PopularBg';
import QuickDiscount from '../components/molecule/quickdiscount/QuickDiscount';

const Home = () => {
  return (
    <>
      <HomeSlider />
      <OrganicShopping />
      <FeatBackground />
      <PopularBg />
      <QuickDiscount />
    </>
  );
};
export default Home;
