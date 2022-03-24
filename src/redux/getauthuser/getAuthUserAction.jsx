import { getAuth } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../firebase.config';

const auth = getAuth();

export const getAuthUser = () => async (dispatch) => {
  dispatch({ type: 'FETCHING_USER' });
  try {
    const userRef = doc(db, 'users', auth.currentUser.uid);
    const docSnap = await getDoc(userRef);

    if (docSnap.exists()) {
      dispatch({ type: 'FETCH_COMPLETE', payload: docSnap.data() });
    }
  } catch (e) {
    dispatch({
      type: 'FETCH_FAILED',
      payload: 'Failed to Fetch. Reload Page!',
    });
  }
};
