import { Button } from 'react-bootstrap';
import { useState, useRef } from 'react';
import { getAuth } from 'firebase/auth';
import { toast } from 'react-toastify';

const ChangePassword = () => {
  const auth = getAuth();
  const spanOne = useRef();
  const spanTwo = useRef();

  const [formData, setFormData] = useState({
    email: auth.currentUser.email,
    currPassword: '',
    newPassword: '',
  });

  const { email, currPassword, newPassword } = formData;
  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (currPassword === '') {
      spanOne.current.style.display = 'block';
      setTimeout(() => {
        spanOne.current.style.display = 'none';
      }, 1500);
    } else if (newPassword === '') {
      spanTwo.current.style.display = 'block';
      setTimeout(() => {
        spanTwo.current.style.display = 'none';
      }, 1500);
    } else {
      toast.success('Functionality in progress');
    }
  };

  return (
    <div className="changePassword">
      <h3>Change Password</h3>
      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <label htmlFor="">Email Address</label>
          <input type="email" id="email" disabled={true} value={email} />
        </div>
        <div className="mb-3">
          <label htmlFor="">Current Password</label>
          <input
            type="text"
            id="currPassword"
            placeholder="Enter Current Password"
            value={currPassword}
            onChange={onChange}
          />
          <span className="curInfo" ref={spanOne}>
            Current Password is required!
          </span>
        </div>
        <div className="mb-3">
          <label htmlFor="">New Password</label>
          <input
            type="text"
            id="newPassword"
            placeholder="Enter New Password"
            value={newPassword}
            onChange={onChange}
          />
          <span className="newInfo" ref={spanTwo}>
            New Password is required!
          </span>
        </div>
        <div className="changeBtnDiv my-4">
          <Button variant="success" type="submit">
            Change Password
          </Button>
        </div>
      </form>
    </div>
  );
};
export default ChangePassword;
