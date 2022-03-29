import './features.scss';
import { Link } from 'react-router-dom';
const Features = ({ imgUrl, title, subtitle }) => {
  const newSubtitle = subtitle.slice(0, 3);

  return (
    <div className="featureDisplay p-2">
      <div className="image">
        <img src={imgUrl} alt="featured images" />
      </div>
      <div className="text">
        <p>{title}</p>
        <ul className="p-0 m-0">
          {newSubtitle.map((listItem, index) => (
            <li key={index}>
              <span>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 512 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="none"
                    strokeLinecap="square"
                    strokeMiterlimit="10"
                    strokeWidth="48"
                    d="M184 112l144 144-144 144"
                  ></path>
                </svg>
                {listItem}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default Features;
