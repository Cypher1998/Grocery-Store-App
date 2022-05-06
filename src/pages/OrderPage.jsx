import './orderpage.scss';
import { connect } from 'react-redux';
import DisplaySpinner from '../components/atom/DisplaySpinner';
import { Link } from 'react-router-dom';
import { getAuth } from 'firebase/auth';
import { fetchAllUserOrders } from '../redux/fetchuserorders/fetchUserOrdersAction';
import { useEffect } from 'react';

const OrderPage = ({ allUserOrders, loading, error, fetchAllUserOrders }) => {
  const auth = getAuth();

  useEffect(() => {
    fetchAllUserOrders(auth.currentUser.uid);

    document.title = 'Cypher Store | My Orders';
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="userOrdersPage">
      <h3>My Orders</h3>
      {loading ? (
        <div className="userOrdersSpinner">
          <DisplaySpinner />
        </div>
      ) : error ? (
        <div className="text-danger mt-2">
          <p style={{ fontWeight: 500 }}>{error}</p>
        </div>
      ) : allUserOrders && allUserOrders.length > 0 ? (
        <div className="table">
          <div>
            <table>
              <thead>
                <tr>
                  <th>id</th>
                  <th>order time</th>
                  <th>method</th>
                  <th>status</th>
                  <th>total</th>
                  <th>action</th>
                </tr>
              </thead>
              {allUserOrders.map((order, index) => {
                const {
                  status,
                  totalPriceToPay,
                  invoice,
                  order_id,
                  created_at,
                  payment_option,
                } = order;

                const dateOne = new Date(created_at);
                const newCreatedAt = String(dateOne).slice(0, 16);

                return (
                  <tbody key={index}>
                    <tr>
                      <td>{invoice}</td>
                      <td>{newCreatedAt}</td>
                      <td>{payment_option}</td>
                      <td
                        className={`${status !== 'pending' && 'otherStatus'}`}
                      >
                        {status}
                      </td>
                      <td>${totalPriceToPay.toFixed(2)}</td>
                      <td>
                        <Link to={`/order/${order_id}`}>Details</Link>
                      </td>
                    </tr>
                  </tbody>
                );
              })}
            </table>
          </div>
        </div>
      ) : (
        <p className="no-orders">No orders made yet!</p>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  loading: state.fetchUserOrders.loading,
  error: state.fetchUserOrders.error,
  allUserOrders: state.fetchUserOrders.allUserOrders,
});

export default connect(mapStateToProps, { fetchAllUserOrders })(OrderPage);
