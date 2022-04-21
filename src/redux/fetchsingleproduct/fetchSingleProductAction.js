import {
  FETCHING_SINGLE_PRODUCT,
  FETCHING_SINGLE_PRODUCT_FAILED,
  FETCHING_SINGLE_PRODUCT_SUCCESS,
} from './fetchSingleProductTypes';
import { db } from '../../firebase.config';
import {
  query,
  collection,
  getDocs,
  where,
  orderBy,
  limit,
} from 'firebase/firestore';

export const fetchSingleProduct = (product) => async (dispatch) => {
  dispatch({ type: FETCHING_SINGLE_PRODUCT });
  try {
    // get single product
    const singleProductRef = collection(db, 'products');
    const qry = query(
      singleProductRef,
      where('name', '==', product),
      orderBy('id', 'asc'),
      limit(1)
    );
    const querySnap = await getDocs(qry);
    let fetchedProduct = [];
    if (querySnap._snapshot.docChanges.length === 0) {
      throw new Error();
    } else {
      querySnap.forEach((doc) => {
        return fetchedProduct.push(doc.data());
      });

      const singleProduct = fetchedProduct[0];

      // get related products
      const relatedProductsRef = collection(db, 'products');
      const qryTwo = query(
        relatedProductsRef,
        where('subcategory', '==', singleProduct.subcategory),
        orderBy('id', 'asc'),
        limit(10)
      );

      const querySnapTwo = await getDocs(qryTwo);
      let getRelatedProducts = [];
      if (querySnapTwo._snapshot.docChanges.length === 0) {
        throw new Error();
      } else {
        querySnapTwo.forEach((doc) => {
          return getRelatedProducts.push(doc.data());
        });
        const relatedProducts = getRelatedProducts?.filter(
          (product) => product.id !== singleProduct.id
        );

        // get single product description
        const singleProductDetailsRef = collection(db, 'descriptions');
        const qryThree = query(
          singleProductDetailsRef,
          where('header', '==', singleProduct.maincategory)
        );

        const querySnapThree = await getDocs(qryThree);
        let fetchedProductDetails = [];
        if (querySnapThree._snapshot.docChanges.length === 0) {
          throw new Error();
        } else {
          querySnapThree.forEach((doc) => {
            return fetchedProductDetails.push(doc.data());
          });

          const singleProductDetails = fetchedProductDetails[0].category;

          for (const [key, value] of Object.entries(singleProductDetails)) {
            if (key === singleProduct.subcategory) {
              const newSingleProduct = { ...singleProduct, description: value };

              dispatch({
                type: FETCHING_SINGLE_PRODUCT_SUCCESS,
                payload: { relatedProducts, newSingleProduct },
              });
            }
          }
        }
      }
    }
  } catch (error) {
    // console.log(error);
    dispatch({
      type: FETCHING_SINGLE_PRODUCT_FAILED,
      payload: 'fetching failed',
    });
  }
};
