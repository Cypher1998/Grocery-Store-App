import './features.scss';
import { Link } from 'react-router-dom';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { urlToPutInSearchBar } from '../../utilities/formatUrl';

const Features = ({ imgUrl, title, subtitle }) => {
  const newSubtitle = subtitle.slice(0, 3);

  const titleUrl = urlToPutInSearchBar(title);
  console.log(titleUrl);
  return (
    <div className="featureDisplay p-2">
      <div className="image">
        <img src={imgUrl} alt="featured images" />
      </div>
      <div className="text">
        <p>
          <Link to={`/main-category/${titleUrl}`}>{title}</Link>
        </p>
        <ul className="p-0 m-0">
          {newSubtitle.map((listItem, index) => {
            const subtitleUrl = urlToPutInSearchBar(listItem);

            return (
              <li key={index}>
                <Link to={`/sub-category/${subtitleUrl}`}>
                  <span>
                    <MdKeyboardArrowRight size={19} />
                    {listItem}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
export default Features;
