import SearchNavbar from '../components/navbarsearch/molecule/SearchNavbar';
import Navbar from '../components/navbar/Navbar';
import HomeSlider from '../components/homebackground/HomeSlider';
import OrganicShopping from '../components/homebackground/OrganicShopping';

const Home = () => {
  return (
    <>
      <SearchNavbar />
      <HomeSlider />
      <OrganicShopping />
      <Navbar />
    </>
  );
};
export default Home;
