import { BsBell, BsCart, BsPerson } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { getAuth } from 'firebase/auth';
const DesktopIconNav = () => {
  const auth = getAuth();

  return (
    <div className="d-flex justify-content-between align-items-center">
      <BsBell size={23} className="iconStyle" />
      <div className="position-relative d-flex justify-content-between align-items-center">
        <BsCart size={24} className="iconStyle" />
        <span className="itemNumber">1</span>
      </div>
      <Link to="/dashboard">
        {auth.currentUser !== null ? (
          <h2 className="iconStyle">{auth.currentUser.displayName[0]}</h2>
        ) : (
          <BsPerson size={25} className="iconStyle" />
        )}
      </Link>
    </div>
  );
};

export default DesktopIconNav;
