import { BsCart } from 'react-icons/bs';
import { connect } from 'react-redux';
import OrderSummary from '../components/atom/ordersummary/OrderSummary';
import { useEffect } from 'react';
import { getAuth } from 'firebase/auth';
import { fetchAllUserOrders } from '../redux/fetchuserorders/fetchUserOrdersAction';
import { ImSpinner3 } from 'react-icons/im';

const IndexRoute = ({
  loading,
  error,
  allUserOrders,
  pendingOrders,
  processingOrders,
  completedOrders,
  fetchAllUserOrders,
}) => {
  const auth = getAuth();

  useEffect(() => {
    fetchAllUserOrders(auth.currentUser.uid);

    document.title = 'Cypher Store | Dashboard';

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="UserDashboard">
      <h3>dashboard</h3>
      <div className="dashboardDiv my-3">
        <OrderSummary
          bgColor="rgb(254, 202, 202)"
          iconColor="rgb(220, 38, 38)"
          text="total order"
          number={
            loading ? (
              <ImSpinner3 />
            ) : error ? (
              <p className="text-danger">network error!</p>
            ) : (
              allUserOrders && allUserOrders.length
            )
          }
          icon={<BsCart size={20} />}
        />
        <OrderSummary
          bgColor="rgb(254, 215, 170)"
          iconColor="rgb(238, 88, 12)"
          text="pending order"
          number={
            loading ? (
              <ImSpinner3 />
            ) : error ? (
              <p className="text-danger">network error!</p>
            ) : (
              allUserOrders && pendingOrders.length
            )
          }
          icon={<BsCart size={20} />}
        />
        <OrderSummary
          bgColor="rgb(199, 210, 254)"
          iconColor="rgb(79, 70, 229)"
          text="processing order"
          number={
            loading ? (
              <ImSpinner3 />
            ) : error ? (
              <p className="text-danger">network error!</p>
            ) : (
              allUserOrders && processingOrders.length
            )
          }
          icon={<BsCart size={20} />}
        />
        <OrderSummary
          bgColor="rgb(167, 243, 208)"
          iconColor="rgb(5, 150, 105)"
          text="completed order"
          number={
            loading ? (
              <ImSpinner3 />
            ) : error ? (
              <p className="text-danger">network error!</p>
            ) : (
              allUserOrders && completedOrders.length
            )
          }
          icon={<BsCart size={20} />}
        />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  loading: state.fetchUserOrders.loading,
  error: state.fetchUserOrders.error,
  allUserOrders: state.fetchUserOrders.allUserOrders,
  pendingOrders: state.fetchUserOrders.statusPending,
  processingOrders: state.fetchUserOrders.statusProcessing,
  completedOrders: state.fetchUserOrders.statusCompleted,
});

export default connect(mapStateToProps, { fetchAllUserOrders })(IndexRoute);
