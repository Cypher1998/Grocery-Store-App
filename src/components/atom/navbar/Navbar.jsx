import './navbar.scss';
import { BsPerson, BsCart } from 'react-icons/bs';
import { AiOutlineHome, AiOutlineAlignLeft } from 'react-icons/ai';
import { getAuth } from 'firebase/auth';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { MOBILE_MODAL_OPEN } from '../../../redux/closemodal/closeModalTypes';
import { useAuthStatus } from '../../customHooks/useAuthStatus';

const Navbar = () => {
  const auth = getAuth();
  const { loggedIn } = useAuthStatus();
  const dispatch = useDispatch();

  const openModal = () => {
    dispatch({
      type: MOBILE_MODAL_OPEN,
    });
  };

  return (
    <div className="mainNavbar py-4 d-lg-none px-md-5">
      <div className="myContainer d-flex justify-content-between">
        <div className="">
          <AiOutlineAlignLeft
            size={25}
            className="iconStyle"
            onClick={openModal}
          />
        </div>
        <div>
          <Link to="/">
            <AiOutlineHome size={25} className="iconStyle" />
          </Link>
        </div>
        <div className="position-relative">
          <BsCart size={25} className="iconStyle" />
          <span className="itemNumber">1</span>
        </div>
        <div>
          <Link to="/dashboard">
            {loggedIn ? (
              <h2 className="iconStyle">{auth.currentUser.displayName[0]}</h2>
            ) : (
              <BsPerson size={25} className="iconStyle" />
            )}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
