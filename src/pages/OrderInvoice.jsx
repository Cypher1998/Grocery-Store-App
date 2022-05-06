import './orderinvoice.scss';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchInvoice } from '../redux/fetchinvoice/fetchInvoiceAction';
import DisplaySpinner from '../components/atom/DisplaySpinner';
import OfflineInfo from '../components/atom/offlinepage/OfflineInfo';
import NoResultImg from '../components/atom/noimageresult/NoResultImg';
import OrderInvoiceForm from '../components/atom/OrderInvoiceForm';

const OrderInvoice = ({ loading, error, invoice, fetchInvoice }) => {
  const { order_id } = useParams();

  useEffect(() => {
    fetchInvoice(order_id);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [order_id]);

  useEffect(() => {
    document.title = 'Cypher Store | Invoice';
    document.documentElement.scrollTop = 0;
  }, []);

  return (
    <>
      {!navigator.onLine ? (
        <OfflineInfo />
      ) : (
        <div className="orderInvoiceDiv myContainer">
          {loading ? (
            <div className="orderSpinner">
              <DisplaySpinner />
            </div>
          ) : error ? (
            <OfflineInfo />
          ) : invoice && Object.keys(invoice).length > 1 ? (
            <div className="orderInvoice">
              <OrderInvoiceForm {...invoice} />
            </div>
          ) : (
            <NoResultImg text="invoice" />
          )}
        </div>
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  loading: state.fetchInvoice.loading,
  invoice: state.fetchInvoice.invoice,
  error: state.fetchInvoice.error,
});

export default connect(mapStateToProps, { fetchInvoice })(OrderInvoice);
