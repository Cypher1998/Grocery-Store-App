import './pagesmodal.scss';
import {
  BsQuestionCircle,
  BsGift,
  BsTelephoneInbound,
  BsFileEarmarkText,
  BsPeople,
  BsBagCheck
} from 'react-icons/bs';
import { MdOutlinePrivacyTip, MdOutlineErrorOutline } from 'react-icons/md';
import { Link } from 'react-router-dom';

const PagesModal = ({ toggleDesktopPageModal }) => {
  return (
    <div className="px-4 py-3">
      <div className="textIconDiv" onClick={toggleDesktopPageModal}>
        <Link to="/offer">
          <BsGift />
          <span>Offer</span>
        </Link>
      </div>
      <div className="textIconDiv" onClick={toggleDesktopPageModal}>
        <Link to="/checkout">
          <BsBagCheck />
          <span>Checkout</span>
        </Link>
      </div>
      <div className="textIconDiv" onClick={toggleDesktopPageModal}>
        <Link to="/faq">
          <BsQuestionCircle />
          <span>FAQ</span>
        </Link>
      </div>
      <div className="textIconDiv" onClick={toggleDesktopPageModal}>
        <Link to="/about-us">
          <BsPeople />
          <span>About Us</span>
        </Link>
      </div>
      <div className="textIconDiv" onClick={toggleDesktopPageModal}>
        <Link to="/contact-us">
          <BsTelephoneInbound />
          <span>Contact Us</span>
        </Link>
      </div>
      <div className="textIconDiv" onClick={toggleDesktopPageModal}>
        <Link to="/privacy-policy">
          <MdOutlinePrivacyTip />
          <span>Privacy Policy</span>
        </Link>
      </div>
      <div className="textIconDiv" onClick={toggleDesktopPageModal}>
        <Link to="/terms-conditions">
          <BsFileEarmarkText />
          <span>Terms & Conditions</span>
        </Link>
      </div>
      <div className="textIconDiv" onClick={toggleDesktopPageModal}>
        <Link to="/404">
          <MdOutlineErrorOutline />
          <span>404</span>
        </Link>
      </div>
    </div>
  );
};

export default PagesModal;
