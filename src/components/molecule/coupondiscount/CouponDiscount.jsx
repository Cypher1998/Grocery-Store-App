import './coupondiscount.scss';
import { useCountdown } from '../../customHooks/useCountdown';
import ExpiredNotice from '../../atom/ExpiredNotice';
import ShowCounter from '../showcounter/ShowCounter';

const CouponDiscount = () => {
  const countDownDate = new Date('Aug 10, 2022 00:00:00').getTime();

  const [days, hours, minutes, seconds] = useCountdown(countDownDate);

  return (
    <div className="coupon">
      <p className="couponText text-center py-2">
        Latest Super Discount Active Coupon Code
      </p>
      {days + hours + minutes + seconds <= 0 ? (
        <ExpiredNotice />
      ) : (
        <ShowCounter
          days={days}
          hours={hours}
          minutes={minutes}
          seconds={seconds}
        />
      )}
    </div>
  );
};
export default CouponDiscount;
