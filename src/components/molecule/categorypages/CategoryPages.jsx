import './categorypages.scss';
import Logo from '../../atom/Logo';
import { FaTimes } from 'react-icons/fa';
import CategoryModal from '../../atom/category/CategoryModal';
import PagesModal from '../../atom/pagesModal/PagesModal';
import { connect, useDispatch } from 'react-redux';
import { MOBILE_MODAL_CLOSE } from '../../../redux/closemodal/closeModalTypes';

const CategoryPages = ({ mobileModal }) => {
  const dispatch = useDispatch();

  const closeModal = () => {
    dispatch({ type: MOBILE_MODAL_CLOSE });
  };

  const onClick = () => {
    dispatch({ type: MOBILE_MODAL_CLOSE });
  };

  return (
    <>
      {mobileModal && (
        <div
          className={`backdrop d-lg-none ${mobileModal && 'addBackdrop'} `}
          onClick={closeModal}
        ></div>
      )}
      <nav
        className={`py-1 modalNav d-lg-none ${
          mobileModal ? 'moveModalHere' : 'moveModalAway'
        }`}
      >
        <div className="px-4 d-flex justify-content-between align-items-center">
          <Logo />
          <div
            className="closeModal d-flex justify-content-center align-items-center"
            onClick={closeModal}
          >
            <FaTimes size={14} />
          </div>
        </div>
      </nav>
      <div
        className={`categoryDisplay d-lg-none ${
          mobileModal ? 'moveModalHere' : 'moveModalAway'
        }`}
      >
        <h6 className="px-4 py-3">All Categories</h6>

        <CategoryModal />
        <h6 className="px-4 mt-4 py-2">Pages</h6>
        <PagesModal onClick={onClick} />
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    mobileModal: state.modal.mobileModal,
  };
};
export default connect(mapStateToProps)(CategoryPages);
