import { BsCart } from 'react-icons/bs';
import OrderSummary from '../components/atom/ordersummary/OrderSummary';

const IndexRoute = () => {
  return (
    <div className="UserDashboard">
      <h3>dashboard</h3>
      <div className="dashboardDiv my-3">
        <OrderSummary
          bgColor="rgb(254, 202, 202)"
          iconColor="rgb(220, 38, 38)"
          text="total order"
          number={0}
          icon={<BsCart size={20} />}
        />
        <OrderSummary
          bgColor="rgb(254, 215, 170)"
          iconColor="rgb(238, 88, 12)"
          text="pending order"
          number={0}
          icon={<BsCart size={20} />}
        />
        <OrderSummary
          bgColor="rgb(199, 210, 254)"
          iconColor="rgb(79, 70, 229)"
          text="processing order"
          number={0}
          icon={<BsCart size={20} />}
        />
        <OrderSummary
          bgColor="rgb(167, 243, 208)"
          iconColor="rgb(5, 150, 105)"
          text="completed order"
          number={0}
          icon={<BsCart size={20} />}
        />
      </div>
      <p className="h5 thankYou text-success mt-4">Thank You!!!</p>
    </div>
  );
};
export default IndexRoute;
