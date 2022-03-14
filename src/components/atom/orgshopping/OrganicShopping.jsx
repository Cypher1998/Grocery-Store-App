import './orgshopping.scss';
import GenButton from '../GenButton';

const OrganicShopping = () => {
  const onClick = () => {};

  return (
    <div className="myContainer d-none d-lg-block py-4 ">
      <div className="organicProduct py-3 px-5 mx-3 d-flex align-items-center justify-content-between">
        <div>
          <span>100% Natural Quality</span>{' '}
          <span className="organic">Organic Product</span>
          <p>
            See Our latest discounted products from here and get a special{' '}
            <a href="#discount">discount product</a>
          </p>
        </div>
        <div>
          <GenButton text="Shop Now" onClick={onClick} />
        </div>
      </div>
    </div>
  );
};
export default OrganicShopping;
