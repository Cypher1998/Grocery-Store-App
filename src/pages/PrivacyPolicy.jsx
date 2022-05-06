import './pagesstaticstyle.scss';
import SharedPages from '../components/utilities/sharedstaticpages/SharedPages';
import { useEffect } from 'react';
import OfflineInfo from '../components/atom/offlinepage/OfflineInfo';
import {
  privacyTextOne,
  privacyTextTwo,
  privacyTextThree,
  privacyTextFour,
  privacyTextFive,
  privacyTextSix,
  privacyTextSeven,
  privacyTextEight,
  privacyTextNine,
  privacyTextTen,
} from '../components/utilities/StaticPagesText';

const PrivacyPolicy = () => {
  useEffect(() => {
    document.title = 'Cypher Store | Privacy Policy';
  }, []);

  return (
    <>
      {!navigator.onLine ? (
        <OfflineInfo />
      ) : (
        <>
          <SharedPages text="privacy policy" />
          <div className="myContainer privacyPolicy">
            <div className="sharedText">
              <h4>Last updated: February 15, 2022</h4>
              <p>{privacyTextOne}</p>
              <p>{privacyTextTwo}</p>
            </div>
            <div className="sharedText">
              <h4>Consent</h4>
              <p>{privacyTextThree}</p>
            </div>
            <div className="sharedText">
              <h4>Information we collect</h4>
              <p>{privacyTextFour}</p>
              <p>{privacyTextFive}</p>
            </div>
            <div className="sharedText">
              <h4>How we use your information</h4>
              <p>{privacyTextSix}</p>
              <ul>
                {privacyTextSeven.map((text, index) => (
                  <li key={index}>
                    <p>{text}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="sharedText">
              <h4>Advertising Partners & Third Party Policies</h4>
              <p>{privacyTextEight}</p>
            </div>
            <div className="sharedText">
              <h4>CCPA Privacy Rights</h4>
              <p>{privacyTextNine}</p>
            </div>
            <div className="sharedText">
              <h4>Children's Information</h4>
              <p>{privacyTextTen}</p>
            </div>
          </div>
        </>
      )}
    </>
  );
};
export default PrivacyPolicy;
