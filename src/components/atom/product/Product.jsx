import './product.scss';
import ProductAddBtn from './ProductAddBtn';
import { BsBagPlusFill } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import { urlToPutInSearchBar } from '../../utilities/formatUrl';
import { connect } from 'react-redux';
import {
	addProductToCart,
	decreaseProductQuantity,
} from '../../../redux/cartproducts/cartProductsAction';
// import { useEffect } from 'react';

const Product = ({
	id,
	imgUrl,
	price,
	discount,
	weight,
	name,
	stock,
	addProductToCart,
	decreaseProductQuantity,
	cart,
}) => {
	// useEffect(() => {
	//   localStorage.setItem('cart', JSON.stringify(cart));
	// }, [cart]);

	const discountedPrice = (discount / 100) * price;
	const newPrice = (price - discountedPrice).toFixed(1).replace(/[.,]0$/, '');

	const nameToPutInUrl = urlToPutInSearchBar(name);

	const navigate = useNavigate();

	const cartCount = (id) => {
		const product = cart?.find((item) => item.id === id);

		if (!product) return 0;
		return product?.count;
	};

	const numOfItemsPurchased = 1;

	const onAddItemToCart = () => {
		if (stock < 5) {
			return;
		}

		addProductToCart(
			{ id, imgUrl, price: discount ? newPrice : price, name },
			numOfItemsPurchased
		);
	};

	const onDecreaseProductQuantity = () => {
		decreaseProductQuantity(id);
	};

	return (
		<div className="productDisplay px-3 pb-2">
			{stock < 5 && (
				<span className="stock-out stock-out-product py-1 px-2">stock out</span>
			)}
			{discount && (
				<span className="discount discount-product py-1 px-2">
					{discount}% off
				</span>
			)}
			<div
				className="productImg"
				onClick={() => navigate(`/product/${nameToPutInUrl}`)}
			>
				<img src={imgUrl} alt="product" />
			</div>
			<div className="productText">
				<span className="weight">{weight}</span>
				<p className="name">{name}</p>
			</div>
			<div className="priceBtn">
				<div className="priceDiv">
					{discount && <span>&#8358;{newPrice}</span>}{' '}
					<span>&#8358;{price}</span>
				</div>
				{cartCount(id) >= 1 ? (
					<ProductAddBtn
						cartCount={cartCount}
						id={id}
						onAddItemToCart={onAddItemToCart}
						onDecreaseProductQuantity={onDecreaseProductQuantity}
					/>
				) : (
					<button
						className={`productBtn ${stock < 5 && 'noStockCursor'}`}
						onClick={() => onAddItemToCart()}
					>
						<BsBagPlusFill size={19} />
					</button>
				)}
			</div>
		</div>
	);
};

const mapStateToProps = (state) => ({
	cart: state.cartProducts.cart,
});

export default connect(mapStateToProps, {
	addProductToCart,
	decreaseProductQuantity,
})(Product);
