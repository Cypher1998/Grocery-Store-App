import './homeslider.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import CouponDiscount from '../coupondiscount/CouponDiscount';
import { backgroundText } from '../../utilities/HomeBg';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { coupons } from '../../../assets/coupon';

const HomeSlider = () => {
	const activeCoupons = coupons.filter(
		(coupon) => coupon.isActive === 'Active'
	);

	return (
		<div className="homeSlider">
			<div className="myContainer">
				<div className="row g-4 pt-1 pt-md-2">
					<div className={`col-lg-${activeCoupons.length > 0 ? 7 : 12}`}>
						<Swiper
							modules={[Navigation, Pagination, A11y, Autoplay, Scrollbar]}
							spaceBetween={30}
							slidesPerView={1}
							pagination={{ clickable: true }}
							loop={true}
							autoplay={true}
						>
							{backgroundText.map((background, index) => (
								<SwiperSlide key={index}>
									<div
										className="swiper"
										style={{
											background: `url(${background.url}) center/cover no-repeat`,
											color: `${background.color && background.color}`,
										}}
									>
										<div
											className="swiperText"
											style={{
												color: `${background.color && background.color}`,
												transform: `${
													background.transform && background.transform
												}`,
											}}
										>
											<h2>{background.bigText}</h2>
											<p>{background.smallText}.</p>
											<Button
												variant={background.variant}
												className="px-3 d-none d-sm-block"
											>
												<Link to={`${background.linkUrl}`}>Shop Now</Link>
											</Button>
										</div>
									</div>
								</SwiperSlide>
							))}
						</Swiper>
					</div>

					<div
						className={`d-none d-lg-block ${
							activeCoupons.length > 0 ? 'col-lg-5' : 'd-lg-none'
						}`}
					>
						<div className="coupon">
							<p className="couponText text-center py-2">
								Latest Super Discount Active Coupon Code
							</p>
							{activeCoupons.map((activeCoupon) => (
								<CouponDiscount key={activeCoupon.id} {...activeCoupon} />
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default HomeSlider;
