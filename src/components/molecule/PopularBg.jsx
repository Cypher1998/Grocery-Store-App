import UnknownChild from '../utilities/UnknownChild';
import { fetchPopularProducts } from '../../redux/popularproducts/popularActions';
import DisplaySpinner from '../atom/DisplaySpinner';
import Product from '../atom/product/Product';
import { connect } from 'react-redux';
import { useEffect } from 'react';
import ErrorText from '../atom/ErrorText';

const PopularBg = ({ fetchPopularProducts, productResult }) => {
  const { error, loading, popularProducts } = productResult;

  useEffect(() => {
    fetchPopularProducts();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="bgDisplayProducts py-5">
      <div className="myContainer">
        <UnknownChild>
          <div className="randomText text-center px-4 col-lg-6 col-xl-5 mx-auto pb-3">
            <h3>Popular Products for Daily Shopping</h3>
            <p>
              See all our popular products in this week. You can choose your
              daily needs products from this list and get some special offer
              with free shipping.
            </p>
          </div>
        </UnknownChild>

        {loading ? (
          <DisplaySpinner />
        ) : error !== null ? (
          <ErrorText error={error} />
        ) : (
          popularProducts && (
            <div className="productsDisplay">
              {popularProducts.map((product) => {
                return <Product key={product.id} {...product} />;
              })}
            </div>
          )
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    productResult: state.popularProducts,
  };
};

export default connect(mapStateToProps, { fetchPopularProducts })(PopularBg);
