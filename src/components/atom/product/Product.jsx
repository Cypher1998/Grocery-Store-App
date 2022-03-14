import './product.scss';
import { BsBagPlusFill } from 'react-icons/bs';

const Product = ({ imgUrl, price, discount, weight, name, stock }) => {
  const discountedPrice = (discount / 100) * price;
  const newPrice = (price - discountedPrice).toFixed(2).replace(/[.,]0$/, '');

  return (
    <div className="productDisplay px-3 pb-2">
      {stock < 5 && <span className="stock py-1 px-2">stock out</span>}
      {discount && <span className="discount py-1 px-2">{discount}% off</span>}
      <div className="productImg">
        <img src={imgUrl} alt="product" />
      </div>
      <div className="productText">
        <div>
          <span className="weight">{weight}</span>
          <p>{name}</p>
        </div>
        <div className="priceButton">
          <div className="priceDiv">
            <span>${price}</span> {discount && <span>${newPrice}</span>}
          </div>
          <button>
            <BsBagPlusFill size={19} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;