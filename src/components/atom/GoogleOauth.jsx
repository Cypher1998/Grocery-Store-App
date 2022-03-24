import { Button } from 'react-bootstrap';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { doc, setDoc, getDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../../firebase.config';
import { toast } from 'react-toastify';
import { useLocation, useNavigate } from 'react-router-dom';

const GoogleOauth = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const onClick = async () => {
    try {
      const auth = getAuth();
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log(user);
      const docRef = doc(db, 'users', user.uid);
      const docSnap = await getDoc(docRef);
      if (!docSnap.exists()) {
        await setDoc(doc(db, 'users', user.uid), {
          name: user.displayName,
          email: user.email,
          timestamp: serverTimestamp(),
          photoURL: user.photoURL,
        });
        toast.success('Authorization success!');
      }
      navigate('/');
    } catch (error) {
      toast.error('Failed to authorize user!');
    }
  };

  return (
    <Button variant="danger" type="button" onClick={onClick}>
      Sign-{location.pathname === '/sign-up' ? 'Up' : 'In'} With Google
    </Button>
  );
};
export default GoogleOauth;
