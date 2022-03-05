// import {useEffect} from 'react'
import {
  FETCH_REQUEST,
  FETCH_REQUEST_SUCCESS,
  FETCH_REQUEST_FAILED,
} from './featureTypes';

import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import { db } from '../../firebase.config';

export const fetchFeaturesData = () => async (dispatch) => {
  dispatch({ type: FETCH_REQUEST });
  try {
    // get reference
    const featuresRef = collection(db, 'features');

    // create query
    const q = query(featuresRef, orderBy('id', 'asc'));

    // execute query
    const querySnap = await getDocs(q);

    let features = [];
    if (querySnap._snapshot.docChanges.length === 0) {
      throw new Error('Failed To Fetch. Reload page!');
    } else {
      querySnap.forEach((doc) => {
        return features.push(doc.data());
      });
      dispatch({ type: FETCH_REQUEST_SUCCESS, payload: features });
    }
  } catch (error) {
    dispatch({ type: FETCH_REQUEST_FAILED, payload: error.toString() });
  }
};
