import GenButton from '../GenButton';
import './quickinfo.scss';
import deliveryImg from '../../../assets/delivery-boy.webp';

const QuickInfo = () => {
  return (
    <section className="quickInfo p-4 p-lg-5">
      <div className="quickInfoDiv p-4 p-lg-5">
        <div className="row d-flex align-items-center">
          <div className="col-12 col-md-9 col-lg-7">
            <p className="m-0 p-0 titleOne">Organic Products and Food</p>
            <h4 className="mb-2 mt-lg-1 titleTwo">
              Quick Delivery to <span>Your Home</span>
            </h4>
            <p className="info mb-4">
              There are many products you will find our shop, Choose your daily
              necessary product from our KachaBazar shop and get some special
              offer. See Our latest discounted products from here and get a
              special discount.
            </p>
            <a href="#download">
              <GenButton text="Download App" />
            </a>
          </div>
          <div className="delivery d-none d-md-block col-md-2 col-lg-5">
            <img src={deliveryImg} alt="delivery-boy" />
          </div>
        </div>
      </div>
    </section>
  );
};
export default QuickInfo;
