import './checkout.scss';
import { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { BsCreditCard } from 'react-icons/bs';
import { MdArrowBack, MdArrowForward } from 'react-icons/md';
import { FaShuttleVan, FaWallet } from 'react-icons/fa';
import OrderInfoCheckOut from '../components/atom/OrderInfoCheckOut';
import OfflineInfo from '../components/atom/offlinepage/OfflineInfo';
import { coupons } from '../assets/coupon';
import { getAuth } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { db } from '../firebase.config';
import { v4 as uuidv4 } from 'uuid';
import { toast } from 'react-toastify';
import { connect } from 'react-redux';
import { getAuthUser } from '../redux/getauthuser/getAuthUserAction';

const CheckOutPage = ({ user, getAuthUser }) => {
	const auth = getAuth();
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const cart = useSelector((state) => state.cartProducts.cart);
	const totalPriceInCart = cart?.reduce(
		(amount, product) => amount + product.count * +product.price,
		0
	);

	const emptyValueRef = useRef([]);
	const divWrap = useRef();
	const [couponText, setCouponText] = useState('');
	const [showCardInfoDiv, setShowCardInfoDiv] = useState(false);
	const [discountPrice, setDiscountPrice] = useState('0.00');
	const [deliveryForm, setDeliveryForm] = useState({
		firstName: '',
		lastName: '',
		email: '',
		number: '',
		address: '',
		city: '',
		country: '',
		zip_code: '',
		shipping_cost: '',
		payment_option: '',
	});

	const {
		firstName,
		lastName,
		email,
		number,
		address,
		city,
		country,
		zip_code,
		shipping_cost,
		payment_option,
	} = deliveryForm;

	useEffect(() => {
		document.title = 'Cypher Store | Checkout';
		document.documentElement.scrollTop = 0;
		getAuthUser();

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const findCoupon = (text) => {
		return coupons.find(
			(coupon) => coupon.couponCode === text && coupon.isActive === 'Active'
		);
	};

	const onApplyCouponText = () => {
		if (couponText === '') {
			toast.error('Coupon field is empty!');
		} else {
			const coupon = findCoupon(couponText);
			if (coupon === undefined) {
				toast.error('Coupon is either invalid or inactive!');
				return;
			} else {
				if (coupon.minPriceValid > totalPriceInCart) {
					toast.error(
						`Applicable when total price is more than $${coupon.minPriceValid}`
					);
					return;
				} else {
					const couponPriceDiscount = (
						(coupon.percentageOff / 100) *
						totalPriceInCart
					).toFixed(2);
					setDiscountPrice(couponPriceDiscount);
					toast.success('Coupon applied successfully!');
					setTimeout(() => {
						setCouponText('');
					}, 3000);
				}
			}
		}
	};

	const totalPriceToPay =
		totalPriceInCart + Number(shipping_cost) - Number(discountPrice);

	const onChange = (e) => {
		setDeliveryForm({ ...deliveryForm, [e.target.name]: e.target.value });

		if (e.target.value === 'Card') {
			setShowCardInfoDiv(true);
		} else {
			setShowCardInfoDiv(false);
		}

		if (e.target.value === '') {
			emptyValueRef.current[`${e.target.name}`].style.display = 'block';
		} else {
			emptyValueRef.current[`${e.target.name}`].style.display = 'none';
		}
	};

	const onOrderSubmit = async (e) => {
		e.preventDefault();

		try {
			if (cart.length < 1) {
				return;
			}

			if (payment_option === 'Card') {
				toast.error('Card Payment is unavailable!');
			}
			if (firstName === '') {
				emptyValueRef.current['firstName'].style.display = 'block';
			}
			if (lastName === '') {
				emptyValueRef.current['lastName'].style.display = 'block';
			}
			if (email === '') {
				emptyValueRef.current['email'].style.display = 'block';
			}
			if (number === '') {
				emptyValueRef.current['number'].style.display = 'block';
			}
			if (address === '') {
				emptyValueRef.current['address'].style.display = 'block';
			}
			if (city === '') {
				emptyValueRef.current['city'].style.display = 'block';
			}
			if (country === '') {
				emptyValueRef.current['country'].style.display = 'block';
			}
			if (shipping_cost === '') {
				emptyValueRef.current['shipping_cost'].style.display = 'block';
			}
			if (payment_option === '') {
				emptyValueRef.current['payment_option'].style.display = 'block';
			}

			if (
				firstName === '' ||
				lastName === '' ||
				email === '' ||
				number === '' ||
				address === '' ||
				city === '' ||
				country === '' ||
				shipping_cost === '' ||
				payment_option === '' ||
				payment_option === 'Card'
			) {
				divWrap.current.scrollIntoView();
			} else {
				const invoice = Math.floor(Math.random() * (99999 - 10000 + 1) + 10000);
				const order_id = uuidv4();
				const userUid = auth.currentUser.uid;
				const invoice_form = {
					senderName: user?.name,
					senderAddress: user?.address,
					userUid,
					cart,
					firstName,
					lastName,
					email,
					address,
					city,
					totalPriceInCart,
					totalPriceToPay,
					number,
					shipping_cost,
					discountPrice,
					payment_option,
					invoice,
					order_id,
					status: 'pending',
					created_at: new Date().getTime(),
				};

				await setDoc(doc(db, 'orders', order_id), invoice_form);

				toast.success('Your order has been confirmed!');

				setTimeout(() => {
					dispatch({ type: 'EMPTY_CART_CONTENT' });
				}, 1500);

				setTimeout(() => {
					navigate(`/order/${order_id}`);
				}, 2000);
			}
		} catch (error) {
			toast.error('failed to checkout orsers!');
		}
	};

	return (
		<>
			{!navigator.onLine ? (
				<OfflineInfo />
			) : (
				<div className="checkOut myContainer pb-5">
					<OrderInfoCheckOut
						shipping_cost={shipping_cost}
						totalPriceInCart={totalPriceInCart}
						totalPriceToPay={totalPriceToPay}
						discountPrice={discountPrice}
						onApplyCouponText={onApplyCouponText}
						couponText={couponText}
						setCouponText={setCouponText}
					/>
					<div className="customerInfoDiv order-md-1" ref={divWrap}>
						<form onSubmit={onOrderSubmit}>
							<h3>01. Personal Details</h3>
							<div className="personDetails mb-5">
								<div>
									<label htmlFor="firstName">first name</label>
									<input
										type="text"
										name="firstName"
										placeholder="John"
										value={firstName}
										onChange={onChange}
									/>
									<span ref={(el) => (emptyValueRef.current['firstName'] = el)}>
										First Name is required!
									</span>
								</div>
								<div>
									<label htmlFor="lastName">last name</label>
									<input
										type="text"
										name="lastName"
										placeholder="Doe"
										value={lastName}
										onChange={onChange}
									/>
									<span ref={(el) => (emptyValueRef.current['lastName'] = el)}>
										Last Name is required!
									</span>
								</div>
								<div>
									<label htmlFor="address">email address</label>
									<input
										type="email"
										name="email"
										placeholder="youremail@example.com"
										value={email}
										onChange={onChange}
									/>
									<span ref={(el) => (emptyValueRef.current['email'] = el)}>
										Email address is required!
									</span>
								</div>
								<div>
									<label htmlFor="number">phone number</label>
									<input
										type="text"
										name="number"
										placeholder="+234-1324567890"
										value={number}
										onChange={onChange}
									/>
									<span ref={(el) => (emptyValueRef.current['number'] = el)}>
										Phone number is required!
									</span>
								</div>
							</div>
							<h3>02. Shipping Details</h3>
							<div className="shippingDetails mb-4">
								<div>
									<label htmlFor="address">street address</label>
									<input
										type="text"
										name="address"
										placeholder="456 Ikorodu Rd, Lagos"
										value={address}
										onChange={onChange}
									/>
									<span ref={(el) => (emptyValueRef.current['address'] = el)}>
										Street address is required!
									</span>
								</div>
								<div>
									<label htmlFor="city">city</label>
									<input
										type="text"
										name="city"
										placeholder="Ikorodu"
										value={city}
										onChange={onChange}
									/>
									<span ref={(el) => (emptyValueRef.current['city'] = el)}>
										City is required!
									</span>
								</div>
								<div>
									<label htmlFor="country">country</label>
									<input
										type="text"
										name="country"
										placeholder="Nigeria"
										value={country}
										onChange={onChange}
									/>
									<span ref={(el) => (emptyValueRef.current['country'] = el)}>
										Country is required!
									</span>
								</div>
								<div>
									<label htmlFor="country">zip / postal code</label>
									<input
										type="text"
										name="zip_code"
										placeholder="104101"
										value={zip_code}
										onChange={onChange}
									/>
								</div>
							</div>
							<label htmlFor="shipping">shipping cost</label>
							<div className="shippingDiv mt-2 mb-5">
								<div className="shipping">
									<div className="text">
										<p className="icon">
											<FaShuttleVan />
										</p>
										<div>
											<h6>FedEx</h6>
											<p className="info">Delivery: 3 Days Cost : $5.00</p>
										</div>
									</div>
									<input
										type="radio"
										name="shipping_cost"
										value="5.00"
										checked={shipping_cost === '5.00'}
										onChange={onChange}
									/>
								</div>
								<div className="shipping">
									<div className="text">
										<p className="icon">
											<FaShuttleVan />
										</p>
										<div>
											<h6>UPS</h6>
											<p className="info">Delivery: 7 Days Cost : $2.50</p>
										</div>
									</div>
									<input
										type="radio"
										name="shipping_cost"
										value="2.50"
										checked={shipping_cost === '2.50'}
										onChange={onChange}
									/>
								</div>
								<span
									ref={(el) => (emptyValueRef.current['shipping_cost'] = el)}
								>
									Shipping Option is required!
								</span>
							</div>
							<h3>03. Payment Details</h3>
							<div className="paymentDiv">
								{showCardInfoDiv && (
									<div className="cardDetails">
										Card payment temporarily unavailable
									</div>
								)}
								<div className="payment">
									<div className="text">
										<p className="icon">
											<FaWallet />
										</p>
										<div>
											<h6>Cash on Delivery</h6>
										</div>
									</div>
									<input
										type="radio"
										name="payment_option"
										value="COD"
										checked={payment_option === 'COD'}
										onChange={onChange}
									/>
								</div>
								<div className="payment">
									<div className="text">
										<p className="icon">
											<BsCreditCard />
										</p>
										<div>
											<h6>Credit Card</h6>
										</div>
									</div>
									<input
										type="radio"
										name="payment_option"
										value="Card"
										checked={payment_option === 'Card'}
										onChange={onChange}
									/>
								</div>
								<span
									ref={(el) => (emptyValueRef.current['payment_option'] = el)}
								>
									Payment Method is required!
								</span>
							</div>
							<div className="submitBtn">
								<Link to="/">
									<span>
										<MdArrowBack />
									</span>
									continue shopping
								</Link>
								<button type="submit">
									confirm order
									<span>
										<MdArrowForward />
									</span>
								</button>
							</div>
						</form>
					</div>
				</div>
			)}
		</>
	);
};

const mapStateToProps = (state) => {
	return {
		user: state.getAuthUser.user,
	};
};
export default connect(mapStateToProps, { getAuthUser })(CheckOutPage);
