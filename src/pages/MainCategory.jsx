import './category.scss';
import { connect } from 'react-redux';
import {
  fetchCategoryProducts,
  lowPriceProductsFirst,
  highPriceProductsFirst,
  fetchMore,
} from '../redux/fetchcategoryproducts/fetchCategoryProductsActions';
import SharedCategory from '../components/utilities/sharedCategory/SharedCategory';
import { useParams } from 'react-router-dom';
import SharedCategorySlider from '../components/utilities/sharedCategorySlider/SharedCategorySlider';
import { useEffect } from 'react';
import DisplaySpinner from '../components/atom/DisplaySpinner';
import NoResultImg from '../components/atom/noimageresult/NoResultImg';
import Product from '../components/atom/product/Product';
import OfflineInfo from '../components/atom/offlinepage/OfflineInfo';
import { formatUrl } from '../components/utilities/formatUrl';

const MainCategory = ({
  loading,
  error,
  fetchedCategoryProducts,
  slicedCategoryProducts,
  fetchCategoryProducts,
  lowPriceProductsFirst,
  highPriceProductsFirst,
  fetchMore,
  showMore,
}) => {
  const mainCategory = 'maincategory';
  const { category } = useParams();
  const paramToUse = formatUrl(category);

  useEffect(() => {
    fetchCategoryProducts(mainCategory, paramToUse);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category, paramToUse]);

  useEffect(() => {
    document.title = 'Cypher Store | Main Category';
  }, []);

  const onChange = (e) => {
    if (e.target.value === 'low-first') {
      lowPriceProductsFirst();
    } else if (e.target.value === 'high-first') {
      highPriceProductsFirst();
    }
  };

  return (
    <div className="mainCategories">
      <div className="myContainer">
        <SharedCategory />
        <SharedCategorySlider />
        <div className="showTotalProducts p-3 d-flex justify-content-between align-items-center">
          {loading ? (
            <p className="mb-0 ">Fetching...</p>
          ) : fetchedCategoryProducts && fetchedCategoryProducts?.length > 0 ? (
            <>
              <p className="mb-0">
                Showing{' '}
                <span className="totalItems">
                  {slicedCategoryProducts?.length}
                </span>{' '}
                of total{' '}
                <span className="totalItems">
                  {fetchedCategoryProducts?.length}
                </span>{' '}
                items Found
              </p>
              <select onChange={onChange}>
                <option value="" hidden>
                  Sort By Price
                </option>
                <option value="low-first">Low to High</option>
                <option value="high-first">High To Low</option>
              </select>
            </>
          ) : (
            <>
              <p className="mb-0">Zero items fetched</p>
              <select onChange={onChange}>
                <option value="">Sort By Price</option>
              </select>
            </>
          )}
        </div>

        {loading ? (
          <div className="pb-2 pt-3">
            <DisplaySpinner />
          </div>
        ) : error ? (
          <OfflineInfo />
        ) : fetchedCategoryProducts && fetchedCategoryProducts.length > 1 ? (
          <div className="pt-3 pb-5">
            <div className="categoryProductDisplay">
              {slicedCategoryProducts?.map((product) => {
                return <Product key={product.id} {...product} />;
              })}
            </div>
          </div>
        ) : (
          <>
            <NoResultImg />
          </>
        )}
        {showMore && fetchedCategoryProducts?.length > 10 && (
          <div className="loadMoreBtn text-center pt-1 pb-5">
            <button onClick={fetchMore}>load more</button>
          </div>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  loading: state.categoryProducts.loading,
  error: state.categoryProducts.error,
  fetchedCategoryProducts: state.categoryProducts.fetchedCategoryProducts,
  slicedCategoryProducts: state.categoryProducts.slicedCategoryProducts,
  showMore: state.categoryProducts.showMore,
});

export default connect(mapStateToProps, {
  fetchCategoryProducts,
  lowPriceProductsFirst,
  highPriceProductsFirst,
  fetchMore,
})(MainCategory);
