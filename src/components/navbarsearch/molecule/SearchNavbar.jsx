import DesktopNavbar from '../atom/DesktopNavbar';
import Search from '../atom/Search';
import Logo from '../atom/Logo';

const SearchNavbar = () => {
  return (
    <div className="navbarSearch">
      <div className="row myContainer d-flex align-items-center">
        <div className="navbarLogo col-lg-2">
          <Logo />
        </div>
        <div className="col-md-10 col-lg-7 mx-auto">
          <Search />
        </div>
        <div className="navbarIcons col-lg-2 offset-lg-1">
          <DesktopNavbar />
        </div>
      </div>
    </div>
  );
};
export default SearchNavbar;
