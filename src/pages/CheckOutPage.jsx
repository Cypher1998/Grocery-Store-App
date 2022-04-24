import { useEffect } from 'react';
import { getAuth } from 'firebase/auth';
const CheckOutPage = () => {
  const auth = getAuth();
  useEffect(() => {
    console.log(auth.currentUser);
  }, []);
  return <div>CheckOutPage</div>;
};
export default CheckOutPage;
