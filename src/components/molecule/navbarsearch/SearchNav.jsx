import './searchNav.scss';
import Logo from '../../atom/Logo';
import Search from '../../atom/search/Search';
import DesktopIconNav from '../../atom/DesktopIconNav';
import { Link } from 'react-router-dom';
import { MdKeyboardArrowDown } from 'react-icons/md';
import {
  DesktopCategoryModal,
  DesktopPageModal,
} from '../../atom/desktopmodal/DesktopModal';
import { connect } from 'react-redux';
import {
  categoryModal,
  PageModal,
} from '../../../redux/closemodal/closeModalAction';

const SearchNav = ({
  desktopCategoryModal,
  desktopPageModal,
  categoryModal,
  pageModal,
}) => {
  return (
    <>
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
        <div className="accessoryDiv d-none d-lg-block">
          <nav className="navbarNav px-4">
            <div>
              <ul>
                <li onClick={categoryModal}>
                  <span>category</span>
                  <MdKeyboardArrowDown size={22} />
                </li>
                <li>
                  <Link to="/about-us">about us</Link>
                </li>
                <li>
                  <Link to="/contact-us">contact us</Link>
                </li>
                <li onClick={pageModal}>
                  <span>pages</span>
                  <MdKeyboardArrowDown size={22} />
                </li>
              </ul>
            </div>
            <div>
              <ul>
                <li>
                  <Link to="/privacy-policy">privacy policy</Link>
                </li>
                <li>
                  <Link to="/terms-conditions">terms & conditions</Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
      {desktopCategoryModal && (
        <div className="d-none d-lg-block px-5">
          <DesktopCategoryModal />
        </div>
      )}
      {desktopPageModal && (
        <div className="d-none d-lg-block px-5">
          <DesktopPageModal />
        </div>
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    desktopCategoryModal: state.modal.desktopCategoryModal,
    desktopPageModal: state.modal.desktopPageModal,
  };
};

const mapDispatchToProps = (dispatch) => ({
  categoryModal: () => dispatch(categoryModal()),
  pageModal: () => dispatch(PageModal()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchNav);
