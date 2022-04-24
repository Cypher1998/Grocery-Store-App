import './sharedCategory.scss';
import imgOne from '../../../assets/cta-bg-1.webp';
import imgTwo from '../../../assets/cta-bg-2.webp';
import imgThree from '../../../assets/cta-bg-3.webp';
import SharedCategoryText from './SharedCategoryText';
import { Link } from 'react-router-dom';

const SharedCategory = () => {
  return (
    <div className="sharedCategoryDiv mt-3">
      <div className="textImg text-center">
        <Link to="/main-category/fruits-&-vegetable">
          <SharedCategoryText text="fresh & natural" />
          <img src={imgOne} alt="" />
        </Link>
      </div>
      <div className="textImg">
        <Link to="/main-category/fish-&-meat">
          <SharedCategoryText text="fish & meat" />
          <img src={imgTwo} alt="" />
        </Link>
      </div>
      <div className="textImg">
        <Link to="/main-category/biscuits-&-cakes">
          <SharedCategoryText text="bread & bakery" />
          <img src={imgThree} alt="" />
        </Link>
      </div>
    </div>
  );
};

export default SharedCategory;
