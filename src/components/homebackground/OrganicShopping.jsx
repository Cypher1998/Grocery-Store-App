import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const OrganicShopping = () => {
  return (
    <div className="myContainer d-none d-lg-block py-4 ">
      <div className="organicProduct py-3 px-5 mx-3 d-flex align-items-center justify-content-between">
        <div>
          <span>100% Natural Quality</span> <span>Organic Product</span>
          <p>
            See Our latest discounted products from here and get a special{' '}
            <Link to="#discount">discount product</Link>
          </p>
        </div>
        <div>
          <Button variant="success" className="rounded-pill px-4 py-2">
            Shop Now
          </Button>
        </div>
      </div>
    </div>
  );
};
export default OrganicShopping;
