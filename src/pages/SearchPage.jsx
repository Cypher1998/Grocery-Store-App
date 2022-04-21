import { connect } from 'react-redux';
import SharedCategory from '../components/utilities/sharedCategory/SharedCategory';
import {
  fetchSearchQueryProducts,
  lowPriceProductsFirst,
  highPriceProductsFirst,
  fetchMore,
} from '../redux/searchqueryproducts/searchQueryProductsAction';
import SharedCategorySlider from '../components/utilities/sharedCategorySlider/SharedCategorySlider';
import Product from '../components/atom/product/Product';
import OfflineInfo from '../components/atom/offlinepage/OfflineInfo';
import DisplaySpinner from '../components/atom/DisplaySpinner';
import NoResultImg from '../components/atom/noimageresult/NoResultImg';
import { useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';

const SearchPage = ({
  fetchSearchQueryProducts,
  lowPriceProductsFirst,
  highPriceProductsFirst,
  fetchMore,
  loading,
  error,
  showMore,
  searchProducts,
  slicedSearchProducts,
}) => {
  const [searchParams] = useSearchParams();

  const query = searchParams.get('query').toLowerCase();

  useEffect(() => {
    document.title = 'Cypher Store | Search';
  }, []);
  console.log(searchProducts, slicedSearchProducts);
  useEffect(() => {
    fetchSearchQueryProducts(query);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

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
          ) : searchProducts && searchProducts?.length > 0 ? (
            <>
              <p className="mb-0">
                Showing{' '}
                <span className="totalItems">
                  {slicedSearchProducts?.length}
                </span>{' '}
                of total{' '}
                <span className="totalItems">{searchProducts?.length}</span>{' '}
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
        ) : searchProducts && searchProducts.length > 0 ? (
          <div className="pt-3 pb-5">
            <div className="categoryProductDisplay">
              {slicedSearchProducts?.map((product) => {
                product.count = 1;
                return <Product key={product.id} {...product} />;
              })}
            </div>
          </div>
        ) : (
          <>
            <NoResultImg />
          </>
        )}
        {showMore && searchProducts?.length > 10 && (
          <div className="loadMoreBtn text-center pt-1 pb-5">
            <button onClick={fetchMore}>load more</button>
          </div>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  loading: state.searchQueryProducts.loading,
  error: state.searchQueryProducts.error,
  searchProducts: state.searchQueryProducts.searchProducts,
  slicedSearchProducts: state.searchQueryProducts.slicedSearchProducts,
  showMore: state.searchQueryProducts.showMore,
});

export default connect(mapStateToProps, {
  fetchSearchQueryProducts,
  lowPriceProductsFirst,
  highPriceProductsFirst,
  fetchMore,
})(SearchPage);
