import { Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { MdOutlineVisibility, MdOutlineVisibilityOff } from 'react-icons/md';
import { connect } from 'react-redux';
import SharedPages from '../components/utilities/sharedstaticpages/SharedPages';
import GoogleOauth from '../components/atom/GoogleOauth';
import { toggleForgotPasswordAction } from '../redux/toggleForgetPass/toggleForgetPassword';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { toast } from 'react-toastify';
import { useState, useEffect } from 'react';
import ForgetPassword from '../components/atom/modalforgpass/ForgetPassword';
import OfflineInfo from '../components/atom/offlinepage/OfflineInfo';

const SignIn = ({ toggleForgotPasswordAction, forgotPassModal }) => {
  useEffect(() => {
    document.title = 'Cypher Store | Sign In';
  }, []);

  const [showPassword, setShowPassWord] = useState(false);
  const [formData, setFormData] = useState({ email: '', password: '' });
  const { email, password } = formData;

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

    if (email === '' || password === '') {
      toast.error('Please fill all fields!');
      return;
    }

    try {
      const auth = getAuth();
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      if (userCredential.user) {
        toast.success('Login Success!');
        navigate('/');
      }
    } catch (error) {
      toast.error('Invalid user details!!!');
    }
  };

  return (
    <>
      {!navigator.onLine ? (
        <OfflineInfo />
      ) : (
        <>
          <SharedPages text="sign in" />
          {forgotPassModal && <ForgetPassword />}
          <div className="myContainer signPage">
            <form onSubmit={onSubmit}>
              <div className="email">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  placeholder="enter your email"
                  onChange={onChange}
                />
              </div>
              <div className="password">
                <label htmlFor="password">Password</label>
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  placeholder="enter your password"
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
              <div className="forgetPassword my-2">
                <p onClick={toggleForgotPasswordAction}>Forgot Password?</p>
              </div>
              <div className="buttonStyle">
                <Button variant="success" type="submit">
                  Sign In
                </Button>
              </div>
            </form>
            <div className="buttonStyle my-4">
              <p>OR</p>
              <GoogleOauth />
            </div>
            <div className="register text-center ">
              <p className="px-2">Not a registered user?</p>
              <Link to="/sign-up">Sign Up</Link>
            </div>
          </div>
        </>
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  forgotPassModal: state.forgotPasswordModal.visible,
});

export default connect(mapStateToProps, { toggleForgotPasswordAction })(SignIn);
