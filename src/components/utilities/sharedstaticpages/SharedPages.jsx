import './sharedstaticpages.scss';
// import imgLeft from '../../../assets/images (2).jpg';
import imgRight from '../../../assets/fruit-vegetables.png';

const SharedPages = ({ text }) => {
  return (
    <div className="sharedPages mb-4 mb-lg-5">
      <div className="d-flex justify-content-between align-items-center">
        <img src={imgRight} alt="" />
        <h3>{text}</h3>
        <img src={imgRight} alt="" />
      </div>
    </div>
  );
};
export default SharedPages;
