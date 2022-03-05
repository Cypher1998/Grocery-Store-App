import { BsBell, BsCart, BsPerson } from 'react-icons/bs';

const DesktopNavbar = () => {
  return (
    <div className="d-flex justify-content-between align-items-center">
      <BsBell size={23} style={iconStyle} />
      <div className="position-relative d-flex justify-content-between align-items-center">
        <BsCart size={24} style={iconStyle} />
        <span className="itemNumber">1</span>
      </div>
      <BsPerson size={24} style={iconStyle} />
    </div>
  );
};

const iconStyle = {
  color: '#fff',
  cursor: 'pointer',
};

export default DesktopNavbar;
