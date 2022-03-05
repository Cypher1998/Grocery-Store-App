import { BsPerson, BsCart } from 'react-icons/bs';
import { AiOutlineHome, AiOutlineAlignLeft } from 'react-icons/ai';

const Navbar = () => {
  return (
    <div className="mainNavbar py-4 d-lg-none px-md-5">
      <div className="myContainer d-flex justify-content-between">
        <div className="">
          <AiOutlineAlignLeft size={25} className="iconStyle" />
        </div>
        <div>
          <AiOutlineHome size={25} className="iconStyle" />
        </div>
        <div className="position-relative">
          <BsCart size={25} className="iconStyle" />
          <span className="itemNumber">1</span>
        </div>
        <div className="">
          <BsPerson size={25} className="iconStyle" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
