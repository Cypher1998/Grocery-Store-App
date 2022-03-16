import './desktopmodal.scss';
import CategoryModal from '../category/CategoryModal';
import PagesModal from '../pagesModal/PagesModal';

export const DesktopCategoryModal = () => {
  return (
    <div className="categoryModal py-1">
      <CategoryModal />
    </div>
  );
};

export const DesktopPageModal = () => {
  return (
    <div className="pageModal py-1">
      <PagesModal />
    </div>
  );
};

// export default DeskCategoryModal;
