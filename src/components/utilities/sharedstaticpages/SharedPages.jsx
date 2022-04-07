import './sharedstaticpages.scss';
import { useDispatch } from 'react-redux';
import { fetchFeaturesData } from '../../../redux/featuredcategory/featureActions';
import { useEffect } from 'react';
const SharedPages = ({ text }) => {
  return (
    <div className="sharedPages mb-4 mb-lg-5">
      <div className="d-flex align-items-center justify-content-center">
        <h3>{text}</h3>
      </div>
    </div>
  );
};
export default SharedPages;
