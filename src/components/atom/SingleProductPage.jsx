import SingleProductInfo from './SingleProductInfo';
import { toast } from 'react-toastify';
import { addProductToCart } from '../../redux/cartproducts/cartProductsAction';
import { connect } from 'react-redux';
import { useState } from 'react';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';

const SingleProductPage = ({
  id,
  name,
  price,
  discount,
  imgUrl,
  stock,
  description,
  subcategory,
  details,
  count,
  addProductToCart,
}) => {
  const discountedPrice = (discount / 100) * price;
  const newPrice = (price - discountedPrice).toFixed(1).replace(/[.,]0$/, '');

  const [numOfItemsPurchased, setNumOfItemsPurchased] = useState(1);

  const onIncrease = () => {
    setNumOfItemsPurchased((prevState) => prevState + 1);
  };

  const onDecrease = () => {
    setNumOfItemsPurchased((prevState) => prevState - 1);
  };

  const onAddItemToCart = () => {
    if (stock < 5) {
      toast.error('Product is out of stock');
      return;
    }
    addProductToCart(
      { id, count, imgUrl, price: discount ? newPrice : price, name },
      numOfItemsPurchased
    );

    toast.success(`${numOfItemsPurchased} ${name} added to cart!`);
  };

  return (
    <>
      <div className="productImg">
        <img src={imgUrl} alt={name} />
        {discount && (
          <span className="discount discount-present">{discount}% off</span>
        )}
      </div>
      <div className="productDetails">
        <h5>{name}</h5>
        <h3>
          {discount && <span>${newPrice}</span>} <span>${price}</span>
        </h3>
        <span className={`stock ${stock < 5 ? 'stock-out' : 'stock-in'}`}>
          {stock < 5 ? 'Stock Out' : 'In Stock'}
        </span>
        <p>{description}</p>
        <div className="addToCartDiv">
          <div className="singleProductChooseBtn d-flex align-items-center flex-wrap justify-content-between px-2 px-sm-3">
            <button disabled={numOfItemsPurchased === 1} onClick={onDecrease}>
              <AiOutlineMinus />
            </button>
            <span>{numOfItemsPurchased}</span>
            <button onClick={onIncrease}>
              <AiOutlinePlus />
            </button>
          </div>
          <div className="mainAddBtn">
            <button type="button" onClick={() => onAddItemToCart()}>
              Add to Cart
            </button>
          </div>
        </div>
        <div className="categoryDetails">
          <p>
            <span>category: </span>
            <span>{subcategory}</span>
          </p>
          <ul>
            {details.map((list, index) => (
              <li key={index}>{list}</li>
            ))}
          </ul>
        </div>
      </div>
      <SingleProductInfo />
    </>
  );
};
export default connect(null, { addProductToCart })(SingleProductPage);
