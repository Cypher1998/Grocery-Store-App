import couponImg from '../../assets/bg-image/bg3.webp';
import couponImg2 from '../../assets/bg-image/bg4.jpg';

const ShowCounter = ({ days, hours, minutes, seconds }) => {
  return (
    <>
      <div className="timer mx-2 px-1 pb-2 mb-2 row g-2 bg-light">
        <div className="col-3">
          <img src={couponImg} alt="" />
        </div>
        <div className="col-6 col-xl-6">
          <div className="timerText">
            <span>15%</span> off <span>Active</span>
            <p>Winter Gift Voucher</p>
          </div>
          <div className="timerNum">
            <span>{days}d</span> : <span>{hours}h</span> :{' '}
            <span>{minutes}m</span> : <span>{seconds}s</span>
          </div>
        </div>
        <div className="col-3 timerDetails">
          <h6>WINTER22</h6>
          <p>Apply when shopping is more than $300</p>
        </div>
      </div>
      <div className="timer mx-2 px-1 pb-2 my-2 row g-2 bg-light">
        <div className="col-3">
          <img src={couponImg2} alt="" />
        </div>
        <div className="col-6 col-xl-6">
          <div className="timerText">
            <span>10%</span> off <span>Active</span>
            <p>Winter Gift Voucher</p>
          </div>
          <div className="timerNum">
            <span>{days}d</span> : <span>{hours}h</span> :{' '}
            <span>{minutes}m</span> : <span>{seconds}s</span>
          </div>
        </div>
        <div className="col-3 timerDetails">
          <h6>WINTER22</h6>
          <p>Apply when shopping is more than $200</p>
        </div>
      </div>
    </>
  );
};

export default ShowCounter;
