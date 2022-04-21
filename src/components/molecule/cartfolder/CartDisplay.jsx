import './cartdisplay.scss';
import { connect } from 'react-redux';
import { toggleCartModal } from '../../../redux/cartmodal/cartModalAction';
import { BsBagCheck, BsBagX } from 'react-icons/bs';
import { FaTimes } from 'react-icons/fa';
import { useEffect } from 'react';
import CartProduct from '../../atom/CartProduct';
import { getAuth } from 'firebase/auth';

const CartDisplay = ({ cartModalState, toggleCartModal, cart }) => {
  const auth = getAuth();
  useEffect(() => {
    if (cartModalState) {
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [cartModalState]);
  // console.log(typeof cart[0]);
  const totalPriceInCart = cart?.reduce(
    (amount, product) => amount + product.count * +product.price,
    0
  );

  const emptyCart = 0;

  const proceedToCheckout = () => {
    console.log(auth.currentUser);
  };

  return (
    <>
      {cartModalState && (
        <div
          className={`backdrop  ${cartModalState && 'addBackdrop'} `}
          onClick={toggleCartModal}
        ></div>
      )}
      <nav
        className={`modalNav cartModalNav ${
          cartModalState ? 'moveModalHere' : 'moveCartModalAway'
        }`}
      >
        <div className="px-4 d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center">
            <span className="navIcon">
              <BsBagCheck />
            </span>
            <span className="text">Shopping Cart</span>
          </div>
          <button onClick={toggleCartModal}>
            <FaTimes size={13} />
            <span>close</span>
          </button>
        </div>
      </nav>
      <div
        className={`modalDisplay cartModal ${
          cartModalState ? 'moveModalHere' : 'moveCartModalAway'
        }`}
      >
        {cart?.length >= 1 ? (
          <div className="cartFill">
            {cart?.map((cartProduct) => (
              <CartProduct key={cartProduct.id} {...cartProduct} />
            ))}
          </div>
        ) : (
          <div className="cartEmpty">
            <div className="divOne">
              <div className="divTwo">
                <span className="cartEmptyIcon">
                  <BsBagX />
                </span>
              </div>
              <div className="cartEmptyText">
                <h4>Your cart is empty</h4>
                <p>
                  No items added in your cart. Please add product to your cart
                  list.
                </p>
              </div>
            </div>
          </div>
        )}
        <div className="checkoutBtn p-3">
          <button onClick={proceedToCheckout}>
            <span className="text">proceed to checkout</span>
            <span className="amount">
              $
              {cart.length ? totalPriceInCart.toFixed(2) : emptyCart.toFixed(2)}
            </span>
          </button>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  cartModalState: state.toggleCartModal,
  cart: state.cartProducts.cart,
});

export default connect(mapStateToProps, { toggleCartModal })(CartDisplay);
