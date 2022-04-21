import { Link } from 'react-router-dom';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { urlToPutInSearchBar } from '../utilities/formatUrl';

const BreadCrumb = ({ text, category }) => {
  return (
    <nav className="my-2 mb-md-4">
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <Link to="/">Home</Link>
        </li>
        <MdKeyboardArrowRight className="mx-1" size={20} />
        <li className="breadcrumb-item">
          <Link to={`/sub-category/${urlToPutInSearchBar(category)}`}>
            {category}
          </Link>
        </li>
        <MdKeyboardArrowRight className="mx-1" size={20} />
        <li className="breadcrumb-item active" aria-current="page">
          {text}
        </li>
      </ol>
    </nav>
  );
};
export default BreadCrumb;
