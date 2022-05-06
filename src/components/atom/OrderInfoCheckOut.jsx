import { useSelector } from 'react-redux';
import { useState } from 'react';
import { BsBagXFill } from 'react-icons/bs';
import { toast } from 'react-toastify';
import CartProduct from './CartProduct';

const OrderInfoCheckOut = ({
  shipping_cost,
  totalPriceInCart,
  totalPriceToPay,
  discountPrice,
}) => {
  const [couponText, setCouponText] = useState('');

  const cart = useSelector((state) => state.cartProducts.cart);

  const zero_value = 0;

  const onApplyCouponText = () => {
    if (couponText === '') {
      toast.error('Please Input a Coupon Code!');
    } else if (couponText !== 'WINTER22' && couponText !== 'CYPHER22') {
      toast.error('Please Input a Valid Code!');
    } else {
      toast.success('Functionality in progress!');
    }
  };

  return (
    <div className="orderInfoDiv order-md-2">
      <h4>order summary</h4>
      <div className="orderSummaryCart">
        {cart.length ? (
          cart?.map((orderProduct) => (
            <CartProduct key={orderProduct.id} {...orderProduct} />
          ))
        ) : (
          <div className="emptyOrderSummaryDiv flex-column">
            <span>
              <BsBagXFill size={30} />
            </span>
            <p>no item added yet!</p>
          </div>
        )}
      </div>
      <div className="couponTextDiv d-flex flex-column flex-sm-row justify-content-between">
        <input
          type="text"
          value={couponText}
          placeholder="Input your coupon code"
          onChange={(e) => setCouponText(e.target.value)}
        />
        <button type="button" onClick={onApplyCouponText}>
          Apply
        </button>
      </div>
      <div className="orderPriceDiv">
        <h3>
          <span>subtotal</span>
          <span>${totalPriceInCart.toFixed(2)}</span>
        </h3>
        <h3>
          <span>shipping cost</span>
          <span>${shipping_cost || zero_value.toFixed(2)}</span>
        </h3>
        <h3>
          <span>discount</span>
          <span>${discountPrice}</span>
        </h3>
      </div>
      <div className="totalPriceDiv d-flex justify-content-between align-items-end my-2 mt-3">
        <span>total cost</span> <span>${totalPriceToPay.toFixed(2)}</span>
      </div>
    </div>
  );
};
export default OrderInfoCheckOut;