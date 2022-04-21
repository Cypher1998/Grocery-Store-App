import './desktopmodal.scss';
import CategoryModal from '../category/CategoryModal';

const DesktopCategoryModal = ({ toggleDesktopCategoryModal }) => {
  return (
    <div className="categoryModal py-1">
      <CategoryModal toggleDesktopCategoryModal={toggleDesktopCategoryModal} />
    </div>
  );
};

export default DesktopCategoryModal;
