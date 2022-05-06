import './categorypages.scss';
import Logo from '../../atom/Logo';
import { FaTimes } from 'react-icons/fa';
import CategoryModal from '../../atom/category/CategoryModal';
import PagesModal from '../../atom/pagesModal/PagesModal';
import { connect } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { fetchFeaturesData } from '../../../redux/featuredcategory/featureActions';
import { closeMobileModal } from '../../../redux/closemodal/closeModalAction';
import { removeCartModal } from '../../../redux/cartmodal/cartModalAction';

const CategoryPages = ({
  mobileModal,
  fetchFeaturesData,
  closeMobileModal,
  removeCartModal,
}) => {
  const location = useLocation();
  useEffect(() => {
    if (mobileModal) {
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [mobileModal]);

  useEffect(() => {
    fetchFeaturesData();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    closeMobileModal();
    removeCartModal();

    document.documentElement.scrollTop = 0;

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  return (
    <>
      {mobileModal && (
        <div
          className={`backdrop d-lg-none ${mobileModal && 'addBackdrop'} `}
          onClick={closeMobileModal}
        ></div>
      )}
      <nav
        className={`py-1 modalNav infoNavModal d-lg-none ${
          mobileModal ? 'moveModalHere' : 'moveModalAway'
        }`}
      >
        <div className="px-4 d-flex justify-content-between align-items-center">
          <Logo />
          <div
            className="closeModal d-flex justify-content-center align-items-center"
            onClick={closeMobileModal}
          >
            <FaTimes size={14} />
          </div>
        </div>
      </nav>
      <div
        className={`modalDisplay infoModal d-lg-none ${
          mobileModal ? 'moveModalHere' : 'moveModalAway'
        }`}
      >
        <h6 className="px-4 py-3">All Categories</h6>

        <CategoryModal />
        <h6 className="px-4 mt-4 py-2">Pages</h6>
        <PagesModal />
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    mobileModal: state.modal.mobileModal,
  };
};

export default connect(mapStateToProps, {
  fetchFeaturesData,
  closeMobileModal,
  removeCartModal,
})(CategoryPages);
