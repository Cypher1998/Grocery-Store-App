import './navbar.scss';
import { BsPerson, BsCart } from 'react-icons/bs';
import { AiOutlineAlignLeft, AiOutlineHome } from 'react-icons/ai';
import { getAuth } from 'firebase/auth';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { openMobileModal } from '../../../redux/closemodal/closeModalAction';
import { toggleCartModal } from '../../../redux/cartmodal/cartModalAction';
import { useAuthStatus } from '../../customHooks/useAuthStatus';

const Navbar = ({ openMobileModal, toggleCartModal, cart }) => {
  const auth = getAuth();
  const { loggedIn } = useAuthStatus();

  const onClick = () => {
    document.documentElement.scrollTop = 0;
  };

  const getCartTotalCount = () =>
    cart?.reduce((amount, item) => item.count + amount, 0);

  return (
    <div className="mainNavbar d-lg-none px-md-5">
      <div className="myContainer d-flex justify-content-between align-items-center">
        <div>
          <AiOutlineAlignLeft
            size={23.5}
            className="iconStyle"
            onClick={openMobileModal}
          />
        </div>
        <div onClick={onClick}>
          <Link to="/">
            <AiOutlineHome size={23.5} className="iconStyle" />
          </Link>
        </div>
        <div className="position-relative" onClick={toggleCartModal}>
          <BsCart size={23.5} className="iconStyle" />
          <span className="itemNumber">{getCartTotalCount()}</span>
        </div>
        <div onClick={onClick}>
          <Link to="/dashboard">
            {loggedIn ? (
              <h2 className="iconStyle">{auth.currentUser.displayName[0]}</h2>
            ) : (
              <>
                <BsPerson size={23.5} className="iconStyle" />
              </>
            )}
          </Link>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  cart: state.cartProducts.cart,
});

export default connect(mapStateToProps, { openMobileModal, toggleCartModal })(
  Navbar
);
