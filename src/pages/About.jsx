import './pagesstaticstyle.scss';
import SharedPages from '../components/utilities/sharedstaticpages/SharedPages';
import { useEffect } from 'react';
import {
  aboutTextOne,
  aboutTextTwo,
  aboutTextThree,
  aboutTextFour,
} from '../components/utilities/StaticPagesText';
import imgOne from '../assets/ab-us-1.webp';
import OfflineInfo from '../components/atom/offlinepage/OfflineInfo';

const About = () => {
  useEffect(() => {
    document.title = 'Cypher Store | About Us';
  }, []);

  return (
    <>
      {!navigator.onLine ? (
        <OfflineInfo />
      ) : (
        <>
          <SharedPages text="about us" />
          <div className="myContainer">
            <div className="aboutPage gx-4">
              <div className="aboutText sharedText">
                <h3>Welcome to our Store</h3>
                <p>{aboutTextOne}</p>
                <p>{aboutTextTwo}</p>

                <div className="aboutInfoDiv">
                  <div className="aboutInfo">
                    <h3>10K</h3>
                    <h5>Listed Products</h5>
                    <p>
                      Dynamically morph team driven partnerships after vertical.
                    </p>
                  </div>
                  <div className="aboutInfo">
                    <h3>8K</h3>
                    <h5>Lovely Customer</h5>
                    <p>
                      Competently productize virtual models without performance.
                    </p>
                  </div>
                </div>
              </div>
              <div className=" aboutImage mt-5">
                <img src={imgOne} alt="" />
              </div>
            </div>
            <div className="sharedText my-4">
              <p>{aboutTextThree}</p>
              <p>{aboutTextFour}</p>
            </div>
          </div>
        </>
      )}
    </>
  );
};
export default About;
