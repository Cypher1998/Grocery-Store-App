import UnknownChild from '../utilities/UnknownChild';
import { fetchDiscountedProducts } from '../../redux/discountproducts/discountActions';
import DisplaySpinner from '../atom/DisplaySpinner';
import Product from '../atom/product/Product';
import { connect } from 'react-redux';
import { useEffect } from 'react';
import ErrorText from '../atom/ErrorText';

const DiscountProducts = ({ fetchDiscountedProducts, productResult }) => {
  const { error, loading, discountProducts } = productResult;

  useEffect(() => {
    fetchDiscountedProducts();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className=".bgDisplayProducts py-5">
      <UnknownChild>
        <div className="randomText text-center px-4 col-lg-6 col-xl-5 mx-auto pb-3">
          <h3>Latest Discounted Products</h3>
          <p>
            See Our latest discounted products below. Choose your daily needs
            from here and get a special discount with free shipping.
          </p>
        </div>
      </UnknownChild>
      <>
        {loading ? (
          <DisplaySpinner />
        ) : error !== null ? (
          <ErrorText error={error} />
        ) : (
          discountProducts && (
            <div className="productsDisplay">
              {discountProducts.map((product) => {
                return <Product key={product.id} {...product} />;
              })}
            </div>
          )
        )}
      </>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    productResult: state.discountProducts,
  };
};

export default connect(mapStateToProps, { fetchDiscountedProducts })(
  DiscountProducts
);
