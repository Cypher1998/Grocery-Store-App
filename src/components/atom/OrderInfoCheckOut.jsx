import { useSelector } from 'react-redux';
import { BsBagXFill } from 'react-icons/bs';
import CartProduct from './CartProduct';

const OrderInfoCheckOut = ({
	shipping_cost,
	totalPriceInCart,
	totalPriceToPay,
	discountPrice,
	onApplyCouponText,
	couponText,
	setCouponText,
}) => {
	const cart = useSelector((state) => state.cartProducts.cart);

	const zero_value = 0;

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
					<span>
						&#8358;
						{totalPriceInCart.toLocaleString('en-US', {
							minimumFractionDigits: 2,
						})}
					</span>
				</h3>
				<h3>
					<span>shipping cost</span>
					<span>&#8358;{shipping_cost || zero_value.toFixed(2)}</span>
				</h3>
				<h3>
					<span>discount</span>
					<span>&#8358;{discountPrice}</span>
				</h3>
			</div>
			<div className="totalPriceDiv d-flex justify-content-between align-items-end my-2 mt-3">
				<span>total cost</span>{' '}
				<span>
					&#8358;
					{totalPriceToPay.toLocaleString('en-US', {
						minimumFractionDigits: 2,
					})}
				</span>
			</div>
		</div>
	);
};
export default OrderInfoCheckOut;
