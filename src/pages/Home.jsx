import HomeSlider from '../components/molecule/homeslider/HomeSlider';
import OrganicShopping from '../components/atom/orgshopping/OrganicShopping';
import FeatBackground from '../components/molecule/featurebackground/FeatBackground';
import PopularBg from '../components/molecule/popularproducts/PopularBg';

const Home = () => {
  return (
    <>
      <HomeSlider />
      <OrganicShopping />
      <FeatBackground />
      <PopularBg />
    </>
  );
};
export default Home;
