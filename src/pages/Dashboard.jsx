import './profilepage.scss';
import { connect } from 'react-redux';
import { getAuth } from 'firebase/auth';
import { toast } from 'react-toastify';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import DashBoardLink from '../components/atom/DashBoardLink';
import { BsPersonCheckFill, BsFillFileEarmarkPersonFill } from 'react-icons/bs';
import { FaUnlockAlt } from 'react-icons/fa';
import { MdChangeCircle, MdDashboard } from 'react-icons/md';
import { useEffect } from 'react';
import { getAuthUser } from '../redux/getauthuser/getAuthUserAction';

const DashBoard = ({ getAuthUser }) => {
  const location = useLocation();
  useEffect(() => {
    getAuthUser();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  const navigate = useNavigate();
  const auth = getAuth();

  const { displayName, email, photoURL } = auth.currentUser;

  const newName = displayName.split(' ')[0];
  const initials = newName.charAt(0);

  const logOutUser = () => {
    auth.signOut();
    toast.success('You have logged out from your account!');
    navigate('/');
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  };

  return (
    <>
      <div className="dashboard mb-5 ">
        <div className="myContainer">
          <div className="welcome mb-3 d-flex px-sm-4 justify-content-between align-items-center">
            <div>
              <h5>
                Welcome, <span>{newName}</span>
              </h5>
              <p>{email}</p>
            </div>

            <div className="userImg d-none d-sm-block mx-3 my-2">
              {photoURL !== null ? (
                <img src={photoURL} alt="photoImg" />
              ) : (
                <p>{initials}</p>
              )}
            </div>
          </div>
          <div className="linkOutlet my-4">
            <div className="dashboardLink p-3 mb-4">
              <ul>
                <DashBoardLink
                  url="order-summary"
                  text="dashboard"
                  icon={<MdDashboard />}
                />
                <DashBoardLink
                  url="profile"
                  text="profile"
                  icon={<BsPersonCheckFill />}
                />
                <DashBoardLink
                  url="my-orders"
                  text="my orders"
                  icon={<BsFillFileEarmarkPersonFill />}
                />
                <DashBoardLink
                  url="change-password"
                  text="change password"
                  icon={<MdChangeCircle />}
                />
                <li onClick={logOutUser}>
                  <FaUnlockAlt />
                  <span>Log Out</span>
                </li>
              </ul>
            </div>
            <div className="outletPage p-3 px-lg-4">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default connect(null, { getAuthUser })(DashBoard);
