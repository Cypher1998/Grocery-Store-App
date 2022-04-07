import './sharedCategory.scss';
import imgOne from '../../../assets/cta-bg-1.webp';
import imgTwo from '../../../assets/cta-bg-2.webp';
import imgThree from '../../../assets/cta-bg-3.webp';
import SharedCategoryText from './SharedCategoryText';
import { useNavigate } from 'react-router-dom';

const SharedCategory = () => {
  const navigate = useNavigate();

  return (
    <div className="sharedCategoryDiv mt-3">
      <div
        className="textImg text-center"
        onClick={() => navigate('/main-category/fruits-&-vegetable')}
      >
        <SharedCategoryText text="fresh & natural" />
        <img src={imgOne} alt="" />
      </div>
      <div
        className="textImg"
        onClick={() => navigate('/main-category/fish-&-meat')}
      >
        <SharedCategoryText text="fish & meat" />
        <img src={imgTwo} alt="" />
      </div>
      <div
        className="textImg"
        onClick={() => navigate('/main-category/biscuits-&-cakes')}
      >
        <SharedCategoryText text="bread & bakery" />
        <img src={imgThree} alt="" />
      </div>
    </div>
  );
};

export default SharedCategory;
