import './lstopfooter.scss';
import { MdPayment } from 'react-icons/md';
import { FaShuttleVan } from 'react-icons/fa';
import { FiPhoneCall, FiGift } from 'react-icons/fi';

const LgFooterDetails = () => {
  return (
    <>
      <div className="myContainer">
        <div className="lgInfos pt-4 pb-2">
          <div className="coverInfo">
            <div className="lgInfo">
              <FaShuttleVan className="icon" />
              <p>Free Shipping From $500.00</p>
            </div>
          </div>
          <div className="coverInfo">
            <div className="lgInfo">
              <FiPhoneCall className="icon" />
              <p>Support 24/7 At Anytime</p>
            </div>
          </div>
          <div className="coverInfo">
            <div className="lgInfo">
              <MdPayment className="icon" />
              <p>Secure Payment Totally Safe</p>
            </div>
          </div>
          <div className="coverInfo">
            <div className="lgInfo">
              <FiGift className="icon" />
              <p>Latest Offer Upto 20% Off</p>
            </div>
          </div>
        </div>
      </div>
      <hr />
    </>
  );
};
export default LgFooterDetails;
