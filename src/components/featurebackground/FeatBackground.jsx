import UnknownChild from '../utilities/UnknownChild';
import { connect } from 'react-redux';
import { fetchFeaturesData } from '../../redux/featuredcategory/featureActions';
import spinner from '../../assets/spinner.gif';
import { useEffect } from 'react';

const FeatBackground = ({
  fetchFeaturesData,
  error,
  loading,
  featuresData,
}) => {
  useEffect(() => {
    fetchFeaturesData();
  }, []);

  return (
    <div className="features mt-4 mt-lg-0">
      <div className="myContainer">
        <div className="featuresText text-center pt-5 pb-4">
          <h3>Featured Categories</h3>
          <p>Choose your necessary products from this feature categories.</p>
        </div>
        <div className="pb-5 mb-5">
          {loading ? (
            <UnknownChild>
              <div className="text-center pb-5 spinner">
                <img src={spinner} alt="spinner" />
              </div>
            </UnknownChild>
          ) : error !== null ? (
            <UnknownChild>
              <h5 className="text-danger text-center">{error}</h5>
            </UnknownChild>
          ) : (
            featuresData && (
              <div className="featuresDisplay">
                {featuresData.map((feature) => {
                  const { id, imgUrl, title, subtitle } = feature;
                  return (
                    <div key={id} className="featureDisplay p-2">
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
                })}
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  error: state.features.error,
  loading: state.features.loading,
  featuresData: state.features.featuresData,
});

export default connect(mapStateToProps, { fetchFeaturesData })(FeatBackground);
