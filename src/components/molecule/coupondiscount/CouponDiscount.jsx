import './coupondiscount.scss';
import { useCountdown } from '../../customHooks/useCountdown';
import { useState } from 'react';

const CouponDiscount = ({
	imgUrl,
	endDate,
	isActive,
	couponCode,
	couponName,
	minPriceValid,
	percentageOff,
}) => {
	const [days, hours, minutes, seconds] = useCountdown(endDate);
	const [showCopiedtext, setShowCopiedtext] = useState(false);

	const clickCoupon = () => {
		if (days + hours + minutes + seconds <= 0) {
			return;
		}

		navigator.clipboard.writeText(couponCode);
		setShowCopiedtext(true);

		setTimeout(() => {
			setShowCopiedtext(false);
		}, 2000);
	};

	return (
		<div className="timer mx-2 px-1 mb-4 row g-2 bg-light">
			<div className="col-3 align-self-center">
				<img src={imgUrl} alt={imgUrl} />
			</div>
			<div className="col-6 col-xl-6">
				<div className="timerText">
					<span>{percentageOff}%</span> off <span>{isActive}</span>
					<p>{couponName}</p>
				</div>
				<div className="timerNum">
					<span>{days}d</span> : <span>{hours}h</span> : <span>{minutes}m</span>{' '}
					: <span>{seconds}s</span>
				</div>
			</div>
			<div className="col-3 timerDetails">
				<h6 onClick={clickCoupon}>{showCopiedtext ? 'COPIED!' : couponCode}</h6>
				<p>Apply when shopping is more than ${minPriceValid}</p>
			</div>
		</div>
	);
};
export default CouponDiscount;
