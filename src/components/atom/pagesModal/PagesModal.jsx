import './pagesmodal.scss';
import {
  BsQuestionCircle,
  BsGift,
  BsTelephoneInbound,
  BsFileEarmarkText,
  BsPeople,
} from 'react-icons/bs';
import { MdOutlinePrivacyTip } from 'react-icons/md';
import { Link } from 'react-router-dom';

const PagesModal = () => {
  return (
    <div className="px-4 py-3">
      <div className="textIconDiv">
        <Link to="/">
          <BsGift />
          <span>Offer</span>
        </Link>
      </div>
      <div className="textIconDiv">
        <Link to="/faq">
          <BsQuestionCircle />
          <span>FAQ</span>
        </Link>
      </div>
      <div className="textIconDiv">
        <Link to="/about-us">
          <BsPeople />
          <span>About Us</span>
        </Link>
      </div>
      <div className="textIconDiv">
        <Link to="/contact-us">
          <BsTelephoneInbound />
          <span>Contact Us</span>
        </Link>
      </div>
      <div className="textIconDiv">
        <Link to="/privacy-policy">
          <MdOutlinePrivacyTip />
          <span>Privacy Policy</span>
        </Link>
      </div>
      <div className="textIconDiv">
        <Link to="/terms-conditions">
          <BsFileEarmarkText />
          <span>Terms & Conditions</span>
        </Link>
      </div>
    </div>
  );
};
export default PagesModal;
