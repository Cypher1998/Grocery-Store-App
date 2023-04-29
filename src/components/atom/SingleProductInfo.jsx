import { FaShuttleVan, FaExchangeAlt } from 'react-icons/fa';
import { FiHome, FiDollarSign, FiSun, FiShieldOff } from 'react-icons/fi';
import { MdOutlineLocationOn } from 'react-icons/md';
import { minLimitFreeDelivery } from '../../assets/coupon';

const singleProductInfo = () => {
	return (
		<div className="singleProductInfo py-2">
			<ul>
				<li>
					<span className="iconSpan">
						<FaShuttleVan />
					</span>
					<p>
						Free shipping apply to all orders over shipping{' '}
						<span>&#8358;{minLimitFreeDelivery.toLocaleString()}</span>
					</p>
				</li>
				<li>
					<span className="iconSpan">
						<FiHome />
					</span>
					<p>
						Door Delivery within <span>72 Hour</span>
					</p>
				</li>
				<li>
					<span className="iconSpan">
						<FiDollarSign />
					</span>
					<p>Cash on Delivery Available</p>
				</li>
				<li>
					<span className="iconSpan">
						<FaExchangeAlt />
					</span>
					<p>
						<span>14</span> Days returns money back guarantee
					</p>
				</li>
				<li>
					<span className="iconSpan">
						<FiShieldOff />
					</span>
					<p>Warranty not available this item</p>
				</li>
				<li>
					<span className="iconSpan">
						<FiSun />
					</span>
					<p>Guaranteed 100% organic from natural products.</p>
				</li>
				<li>
					<span className="iconSpan">
						<MdOutlineLocationOn />
					</span>
					<p>
						Delivery from our pick point Cecilia Chapman, 561-4535 Nulla LA,
						United States 96522
					</p>
				</li>
			</ul>
		</div>
	);
};
export default singleProductInfo;
