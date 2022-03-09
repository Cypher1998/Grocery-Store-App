import './featbackground.scss';
import UnknownChild from '../../utilities/UnknownChild';
import Features from '../../atom/features/Features';
import { connect } from 'react-redux';
import { fetchFeaturesData } from '../../../redux/featuredcategory/featureActions';
import spinner from '../../../assets/spinner.gif';
import { useEffect } from 'react';

const FeatBackground = ({
  fetchFeaturesData,
  error,
  loading,
  featuresData,
}) => {
  useEffect(() => {
    fetchFeaturesData();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="features mt-4 mt-lg-0">
      <div className="myContainer">
        <UnknownChild>
          <div className="randomText text-center pt-5 pb-4 col-lg-6 col-xl-5 mx-auto">
            <h3>Featured Categories</h3>
            <p>Choose your necessary products from this feature categories.</p>
          </div>
        </UnknownChild>

        <div className="pb-5">
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
                  return <Features key={feature.id} {...feature} />;
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
