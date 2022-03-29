import './downloadapp.scss';
import appImgLeft from '../../../assets/img-left.webp';
import appImgRight from '../../../assets/img-right.webp';
import appStoreImg from '../../../assets/app-store.svg';
import playStoreImg from '../../../assets/play-store.svg';

const DownloadApp = () => {
  return (
    <div id="download" className="downloadApp py-5">
      <div className="myContainer">
        <div className="row d-flex align-items-center">
          <section className="imageBig d-none d-md-block col-md-6 col-lg-4 col-xl-3">
            <img src={appImgLeft} alt="img-left" />
          </section>
          <section className="randomText px-4  col-md-6 offset-lg-0 col-lg-4 col-xl-5  mx-auto">
            <div className="text-center">
              <h3>Get Your Daily Needs From Your Reliable Cypher Store</h3>
              <p>
                There are many products you will find our shop, Choose your
                daily necessary product from our KachaBazar shop and get some
                special offer.
              </p>
            </div>
            <div className="downloadAppStore pt-2">
              <div className="appleStore">
                <a
                  href="https://www.apple.com/app-store"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={appStoreImg} alt="applestore" />
                </a>
              </div>
              <div className="playStore">
                <a
                  href="https://play.google.com/store/apps"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={playStoreImg} alt="playstore" />
                </a>
              </div>
            </div>
          </section>

          <section className="imageBig d-none d-lg-block col-lg-4 col-xl-3">
            <img src={appImgRight} alt="img-right" />
          </section>
        </div>
      </div>
    </div>
  );
};
export default DownloadApp;
