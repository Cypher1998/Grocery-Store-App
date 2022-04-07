import { Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { MdOutlineVisibility, MdOutlineVisibilityOff } from 'react-icons/md';
import { useState, useEffect } from 'react';
import SharedPages from '../components/utilities/sharedstaticpages/SharedPages';
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth';
import { db } from '../firebase.config';
import { doc, setDoc, serverTimestamp } from 'firebase/firestore';
import { toast } from 'react-toastify';
import GoogleOauth from '../components/atom/GoogleOauth';

const SignUp = () => {
  useEffect(() => {
    document.title = 'Cypher Store | Sign Up';
  }, []);

  const [showPassword, setShowPassWord] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    number: '',
    password: '',
  });
  const { name, email, number, password } = formData;

  const navigate = useNavigate();

  const onChange = (e) => {
    setFormData((prevState) => {
      return {
        ...prevState,
        [e.target.id]: e.target.value,
      };
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (name === '' || email === '' || password === '') {
      toast.error('Please fill all fields!');
      return;
    }

    try {
      const auth = getAuth();
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        number,
        password
      );
      const user = userCredential.user;
      updateProfile(auth.currentUser, { displayName: name });

      const formDataCopy = { ...formData };
      delete formDataCopy.password;
      formDataCopy.timestamp = serverTimestamp();

      await setDoc(doc(db, 'users', user.uid), formDataCopy);
      toast.success('Registration successful!');
      navigate('/');
    } catch (error) {
      console.log(error);
      toast.error('Registration failed, please retry!');
    }
  };

  return (
    <>
      <SharedPages text="sign up" />
      <div className="myContainer signPage">
        <form onSubmit={onSubmit}>
          <div className="name">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              value={name}
              placeholder="Moroof Adeyemi"
              onChange={onChange}
            />
          </div>
          <div className="email">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              placeholder="codedshegzy@gmail.com"
              onChange={onChange}
            />
          </div>
          <div className="number">
            <label htmlFor="number">Number</label>
            <input
              type="text"
              id="number"
              value={number}
              placeholder="+2349067793929"
              onChange={onChange}
            />
          </div>
          <div className="password">
            <label htmlFor="password">Password</label>
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              placeholder="known to me"
              value={password}
              onChange={onChange}
            />
            <div className="showPassword">
              {!showPassword ? (
                <MdOutlineVisibility
                  size={21}
                  onClick={() => setShowPassWord((prevState) => !prevState)}
                />
              ) : (
                <MdOutlineVisibilityOff
                  size={21}
                  onClick={() => setShowPassWord((prevState) => !prevState)}
                />
              )}
            </div>
          </div>
          <div className="buttonStyle mt-3">
            <Button variant="success" type="submit">
              Sign Up
            </Button>
          </div>
        </form>
        <div className="buttonStyle my-4">
          <p>OR</p>
          <GoogleOauth />
        </div>
        <div className="register text-center ">
          <p className="px-2">Already a user?</p>
          <Link to="/sign-in">Sign In</Link>
        </div>
      </div>
    </>
  );
};

export default SignUp;
