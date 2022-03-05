import SearchNavbar from '../components/navbarsearch/molecule/SearchNavbar';
import Navbar from '../components/navbar/Navbar';
import HomeSlider from '../components/homebackground/HomeSlider';
import OrganicShopping from '../components/homebackground/OrganicShopping';
import FeatBackground from '../components/featurebackground/FeatBackground';

const Home = () => {
  return (
    <>
      <SearchNavbar />
      <HomeSlider />
      <OrganicShopping />
      <FeatBackground />
      <Navbar />
    </>
  );
};
export default Home;
