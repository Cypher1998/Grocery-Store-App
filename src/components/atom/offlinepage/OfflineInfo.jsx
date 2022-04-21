import './offlineinfo.scss';
import { useEffect } from 'react';
import { connect } from 'react-redux';

const OfflineInfo = ({ featureError, categoryError, searchError }) => {
  useEffect(() => {
    if (featureError || categoryError || searchError) {
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [featureError, categoryError, searchError]);

  return (
    <>
      <div className="offline"></div>
      <div className="offlineDiv">
        <div>
          <h6>No Internet Connection Available!</h6>
          <p>Please Connect your network, to see the live version</p>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  featureError: state.features.error,
  categoryError: state.categoryProducts.error,
  searchError: state.searchQueryProducts.error,
});

export default connect(mapStateToProps, null)(OfflineInfo);
