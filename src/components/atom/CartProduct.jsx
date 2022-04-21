import { RiDeleteBin6Line } from 'react-icons/ri';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { urlToPutInSearchBar } from '../utilities/formatUrl';
import { connect } from 'react-redux';
import {
  removeProductFromCart,
  addProductToCart,
  decreaseProductQuantity,
} from '../../redux/cartproducts/cartProductsAction';
import { toggleCartModal } from '../../redux/cartmodal/cartModalAction';

const CartProduct = ({
  id,
  count,
  name,
  imgUrl,
  price,
  removeProductFromCart,
  addProductToCart,
  decreaseProductQuantity,
  cart,
  toggleCartModal,
}) => {
  const nameToPutInUrl = urlToPutInSearchBar(name);

  const cartCount = (id) => {
    const product = cart?.find((item) => item.id === id);
    // console.log(product);
    if (!product) return 0;
    return product?.count;
  };

  const numOfItemsPurchased = 1;

  const onAddItemToCart = () => {
    addProductToCart({ id, count, imgUrl, price, name }, numOfItemsPurchased);
  };

  return (
    <div className="cartProduct">
      <div className="imageDiv">
        <div className="image">
          <Link to={`/product/${nameToPutInUrl}`}>
            <img src={imgUrl} alt={name} onClick={toggleCartModal} />
          </Link>
        </div>
      </div>
      <div className="details">
        <p className="name" onClick={toggleCartModal}>
          <Link to={`/product/${nameToPutInUrl}`}>{name}</Link>
        </p>
        <p className="singlePrice" onClick={toggleCartModal}>
          <Link to={`/product/${nameToPutInUrl}`}>
            item price <span>${price}</span>
          </Link>
        </p>
        <div className="buttonDiv mt-1">
          <p className="newPrice">${(count * price).toFixed(2)}</p>
          <div className="cartButton d-flex align-items-center flex-wrap">
            <button
              disabled={cartCount(id) === 1}
              className="button"
              onClick={() => decreaseProductQuantity(id)}
            >
              <AiOutlineMinus />
            </button>
            <span>{cartCount(id)}</span>
            <button className="button" onClick={() => onAddItemToCart()}>
              <AiOutlinePlus />
            </button>
          </div>
          <div className="deleteBtn">
            <button onClick={() => removeProductFromCart(id)}>
              <RiDeleteBin6Line />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  cart: state.cartProducts.cart,
});

export default connect(mapStateToProps, {
  removeProductFromCart,
  addProductToCart,
  decreaseProductQuantity,
  toggleCartModal,
})(CartProduct);
