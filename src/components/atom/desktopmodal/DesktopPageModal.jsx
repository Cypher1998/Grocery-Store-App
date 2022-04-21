import PagesModal from '../pagesModal/PagesModal';

const DesktopPageModal = ({ toggleDesktopPageModal }) => {
  return (
    <div className="pageModal py-1">
      <PagesModal toggleDesktopPageModal={toggleDesktopPageModal} />
    </div>
  );
};

export default DesktopPageModal;
