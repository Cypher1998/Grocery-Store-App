import './offerCoupon.scss';
import { useCountdown } from '../../customHooks/useCountdown';
import { useState } from 'react';

const OfferCoupon = ({
	imgUrl,
	endDate,
	isActive,
	couponCode,
	couponName,
	description,
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
		<div className="offerCoupon p-4">
			<div className="offerDisplay">
				<img src={imgUrl} alt={imgUrl} />
				<div className="text">
					<h6>
						<span
							className={`spanTimer ${
								days + hours + minutes + seconds <= 0
									? 'inactiveDays'
									: 'activeDays'
							}`}
						>
							{days < 0 ? '00' : days}d
						</span>{' '}
						:{' '}
						<span
							className={`spanTimer ${
								days + hours + minutes + seconds <= 0
									? 'inactiveDays'
									: 'activeDays'
							}`}
						>
							{hours < 0 ? '00' : hours}h
						</span>{' '}
						:{' '}
						<span
							className={`spanTimer ${
								days + hours + minutes + seconds <= 0
									? 'inactiveDays'
									: 'activeDays'
							}`}
						>
							{minutes < 0 ? '00' : minutes}m
						</span>{' '}
						:{' '}
						<span
							className={`spanTimer ${
								days + hours + minutes + seconds <= 0
									? 'inactiveDays'
									: 'activeDays'
							}`}
						>
							{seconds < 0 ? '00' : seconds}s
						</span>
					</h6>
					<p>{couponName}</p>
					<h3>
						<span>{percentageOff}%</span> <span>Off</span>
					</h3>
				</div>
			</div>

			<div className="offerCouponInfo ps-md-3">
				<p>
					Coupon{' '}
					<span
						className={isActive === 'Active' ? 'text-success' : 'text-danger'}
					>
						{isActive}
					</span>
				</p>
				<button onClick={clickCoupon}>
					{showCopiedtext ? 'COPIED!' : couponCode}
				</button>
				<small>
					* {description} <span>${minPriceValid}</span>
				</small>
			</div>
		</div>
	);
};
export default OfferCoupon;
