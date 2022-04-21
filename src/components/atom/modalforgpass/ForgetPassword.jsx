import './forgotpassmodal.scss';
import { Button } from 'react-bootstrap';
import { FaTimes } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { toggleForgotPasswordAction } from '../../../redux/toggleForgetPass/toggleForgetPassword';
import { sendPasswordResetEmail, getAuth } from 'firebase/auth';
import { useState } from 'react';
import { toast } from 'react-toastify';

const ForgetPassword = () => {
  const [email, setEmail] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const auth = getAuth();
      await sendPasswordResetEmail(auth, email);
      toast.success('Password reset email sent!');
    } catch (error) {
      toast.error('Could not send password reset email');
    }
  };

  const dispatch = useDispatch();

  const closeModal = () => {
    dispatch(toggleForgotPasswordAction());
  };

  return (
    <>
      <div className="forgotPasswordModal" onClick={closeModal}></div>
      <div className="formBackground">
        <div
          className="closeModal d-flex justify-content-center align-items-center"
          onClick={closeModal}
        >
          <FaTimes size={14} />
        </div>
        <div>
          <h3>FORGOT PASSWORD</h3>
          <form onSubmit={onSubmit}>
            <div className="mb-4">
              <label htmlFor="email">Enter your email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <Button type="submit" variant="success">
              Send Reset Link
            </Button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ForgetPassword;
