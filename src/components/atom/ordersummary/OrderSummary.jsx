import './ordersummary.scss';

const OrderSummary = ({ icon, bgColor, iconColor, text, number }) => {
  return (
    <div className="orderSummaryDiv px-3 py-2">
      <div
        className="icon"
        style={{ background: `${bgColor}`, color: `${iconColor}` }}
      >
        {icon}
      </div>
      <div className="text">
        <p>{text}</p>
        <h3>{number}</h3>
      </div>
    </div>
  );
};
export default OrderSummary;
