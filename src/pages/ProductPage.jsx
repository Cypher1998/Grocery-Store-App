import './productpage.scss';
import { connect } from 'react-redux';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { formatUrl } from '../components/utilities/formatUrl';
import { fetchSingleProduct } from '../redux/fetchsingleproduct/fetchSingleProductAction';
import DisplaySpinner from '../components/atom/DisplaySpinner';
import OfflineInfo from '../components/atom/offlinepage/OfflineInfo';
import BreadCrumb from '../components/atom/BreadCrumb';
import SingleProductPage from '../components/atom/SingleProductPage';
import Product from '../components/atom/product/Product';

const ProductPage = ({
  fetchSingleProduct,
  loading,
  error,
  singleProduct,
  relatedProducts,
}) => {
  const { product } = useParams();
  const paramToUse = formatUrl(product);
  const arrText = product.split('-');
  for (let i = 0; i < arrText.length; i++) {
    arrText[i] = arrText[i].charAt(0).toUpperCase() + arrText[i].slice(1);
  }
  const text = arrText.join(' ');

  useEffect(() => {
    fetchSingleProduct(paramToUse);

    document.title = `Cypher Store | ${text}`;

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [paramToUse]);

  return (
    <div className="singlePage">
      {loading ? (
        <div className="spinnerDisplay">
          <DisplaySpinner />
        </div>
      ) : error !== null ? (
        <OfflineInfo />
      ) : (
        singleProduct &&
        relatedProducts && (
          <div className="myContainer">
            <BreadCrumb category={singleProduct.subcategory} text={text} />
            <div className="singlePageProductDisplay myContainer pb-3 p-xl-5">
              <SingleProductPage {...singleProduct} count={1} />
            </div>
            <div className="relatedProducts mt-5">
              <h5>related products</h5>
              <div className="productsDisplay">
                {relatedProducts.map((product) => {
                  return <Product key={product.id} {...product} />;
                })}
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  loading: state.singleProductFetched.loading,
  error: state.singleProductFetched.error,
  singleProduct: state.singleProductFetched.singleProduct,
  relatedProducts: state.singleProductFetched.relatedProducts,
});

export default connect(mapStateToProps, { fetchSingleProduct })(ProductPage);
