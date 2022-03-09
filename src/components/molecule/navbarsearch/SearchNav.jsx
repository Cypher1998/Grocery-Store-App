import './searchNav.scss';
import Logo from '../../atom/Logo';
import Search from '../../atom/search/Search';
import DesktopIconNav from '../../atom/DesktopIconNav';

const SearchNav = () => {
  return (
    <div className="navbarSearch">
      <div className="row myContainer d-flex align-items-center">
        <div className="col-lg-2 d-none d-lg-block">
          <Logo />
        </div>
        <div className="col-md-10 col-lg-7 mx-auto">
          <Search />
        </div>
        <div className="navbarIcons col-lg-2 offset-lg-1 d-none d-lg-block">
          <DesktopIconNav />
        </div>
      </div>
    </div>
  );
};
export default SearchNav;
