import './pagesstaticstyle.scss';
import OfflineInfo from '../components/atom/offlinepage/OfflineInfo';
import SharedPages from '../components/utilities/sharedstaticpages/SharedPages';
import OfferCoupon from '../components/atom/offercoupon/OfferCoupon';
import { useEffect } from 'react';
import { coupons } from '../assets/coupon';

const Offers = () => {
  useEffect(() => {
    document.title = 'Cypher Store | Offer';
  }, []);

  return (
    <>
      {!navigator.onLine ? (
        <OfflineInfo />
      ) : (
        <>
          <SharedPages text="mega offer" />
          <div className="myContainer offer">
            {coupons.map((coupon) => (
              <OfferCoupon key={coupon.id} {...coupon} />
            ))}
          </div>
        </>
      )}
    </>
  );
};
export default Offers;
