import './searchNav.scss';
import Logo from '../../atom/Logo';
import Search from '../../atom/search/Search';
import DesktopIconNav from '../../atom/DesktopIconNav';
import { Link } from 'react-router-dom';
// import { MdOutlineKeyboardArrowDown } from 'react-icons/md';

const SearchNav = () => {
  return (
    <div className="mainNavbarFixed">
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
      <div className="d-none d-lg-block">
        <nav className="navbarNav pt-3">
          <ul>
            <li>
              <Link to="/about-us">about us</Link>
            </li>
            <li>
              <Link to="/contact-us">contact us</Link>
            </li>
            <li>
              <Link to="/privacy-policy">privacy policy</Link>
            </li>
            <li>
              <Link to="/terms-condtions">terms & conditions</Link>
            </li>
          </ul>
          <hr />
        </nav>
      </div>
    </div>
  );
};
export default SearchNav;
