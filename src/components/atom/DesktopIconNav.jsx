import { BsBell, BsCart, BsPerson } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { getAuth } from 'firebase/auth';
import { connect } from 'react-redux';
import { toggleCartModal } from '../../redux/cartmodal/cartModalAction';
import { useAuthStatus } from '../customHooks/useAuthStatus';

const DesktopIconNav = ({ toggleCartModal, cart }) => {
  const auth = getAuth();
  const { loggedIn } = useAuthStatus();

  const getCartTotalCount = () =>
    cart?.reduce((amount, item) => item.count + amount, 0);

  return (
    <div className="d-flex justify-content-between align-items-center">
      <BsBell size={23} className="iconStyle" />
      <div
        className="position-relative cartClick d-flex justify-content-between align-items-center"
        onClick={toggleCartModal}
      >
        <BsCart size={23} className="iconStyle" />
        <span className="itemNumber">{getCartTotalCount()}</span>
      </div>
      <Link to="/dashboard">
        {loggedIn ? (
          <h2 className="iconStyle">{auth.currentUser.displayName[0]}</h2>
        ) : (
          <BsPerson size={23} className="iconStyle" />
        )}
      </Link>
    </div>
  );
};

const mapStateToProps = (state) => ({
  cart: state.cartProducts.cart,
});

export default connect(mapStateToProps, { toggleCartModal })(DesktopIconNav);
