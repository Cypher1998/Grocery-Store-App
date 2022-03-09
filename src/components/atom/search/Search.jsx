import './search.scss';
import { BiSearch } from 'react-icons/bi';

const Search = () => {
  return (
    <div className="searchBox">
      <input
        type="text"
        placeholder="Search for products (e.g. fish, apple, oil)"
      />
      <button>
        <BiSearch size={21} />
      </button>
    </div>
  );
};
export default Search;
