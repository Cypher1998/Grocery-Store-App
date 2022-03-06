const Features = ({ imgUrl, title, subtitle }) => {
  return (
    <div className="featureDisplay p-2">
      <div className="image">
        <img src={imgUrl} alt="featured images" />
      </div>
      <div className="text">
        <p>{title}</p>
        <ul className="p-0 m-0">
          {subtitle.map((listItem) => (
            <li>
              <span>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 512 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="none"
                    stroke-linecap="square"
                    stroke-miterlimit="10"
                    stroke-width="48"
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
