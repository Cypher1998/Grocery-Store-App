import './offlineinfo.scss';

const OfflineInfo = () => {
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

export default OfflineInfo;
