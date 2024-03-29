import './quickdiscount.scss';
import QuickInfo from '../../atom/quickinfo/QuickInfo';
import DiscountProducts from '../DiscountProducts';

const QuickDiscount = () => {
  return (
    <div className="quickDiscount">
      <div className="myContainer">
        <QuickInfo />
        <DiscountProducts />
      </div>
    </div>
  );
};
export default QuickDiscount;
