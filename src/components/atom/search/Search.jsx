import './search.scss';
import { BiSearch } from 'react-icons/bi';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Search = () => {
  const [text, setText] = useState('');
  const navigate = useNavigate();

  const onClick = () => {
    if (!text) {
      return;
    }
    navigate(`/search?query=${text}`);
    setTimeout(() => {
      setText('');
    }, 1000);
  };

  return (
    <div className="searchBox">
      <input
        type="text"
        placeholder="Search for products (e.g. fish, apple, oil)"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={onClick}>
        <BiSearch size={21} />
      </button>
    </div>
  );
};
export default Search;
