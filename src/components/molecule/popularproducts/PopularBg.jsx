import './popularbg.scss';
import UnknownChild from '../../utilities/UnknownChild';

const PopularBg = () => {
  return (
    <div className="popularProducts py-5 mb-5">
      <div className="myContainer">
        <UnknownChild>
          <div className="randomText text-center px-4 col-lg-5 col-xl-5 mx-auto">
            <h3>Popular Products for Daily Shopping</h3>
            <p>
              See all our popular products in this week. You can choose your
              daily needs products from this list and get some special offer
              with free shipping.
            </p>
          </div>
        </UnknownChild>
        <div className="text-center"></div>
      </div>
    </div>
  );
};
export default PopularBg;
