import { BsBell, BsCart, BsPerson } from 'react-icons/bs';

const DesktopIconNav = () => {
  return (
    <div className="d-flex justify-content-between align-items-center">
      <BsBell size={23} className="iconStyle" />
      <div className="position-relative d-flex justify-content-between align-items-center">
        <BsCart size={24} className="iconStyle" />
        <span className="itemNumber">1</span>
      </div>
      <BsPerson size={24} className="iconStyle" />
    </div>
  );
};

export default DesktopIconNav;
