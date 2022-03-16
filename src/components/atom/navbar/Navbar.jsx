import './navbar.scss';
import { BsPerson, BsCart } from 'react-icons/bs';
import { AiOutlineHome, AiOutlineAlignLeft } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { MOBILE_MODAL_OPEN } from '../../../redux/closemodal/closeModalTypes';

const Navbar = () => {
  const dispatch = useDispatch();
  const openModal = () => {
    dispatch({
      type: MOBILE_MODAL_OPEN,
    });
  };
  return (
    <div className="mainNavbar py-4 d-lg-none px-md-5">
      <div className="myContainer d-flex justify-content-between">
        <div className="">
          <AiOutlineAlignLeft
            size={25}
            className="iconStyle"
            onClick={openModal}
          />
        </div>
        <div>
          <Link to="/">
            <AiOutlineHome size={25} className="iconStyle" />
          </Link>
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
