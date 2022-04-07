import './pagesstaticstyle.scss';
import SharedPages from '../components/utilities/sharedstaticpages/SharedPages';
import { useEffect } from 'react';
import {
  termsTextOne,
  termsTextTwo,
  termsTextTwoA,
  termsTextThree,
  termsTextFour,
  termsTextFive,
  termsTextSix,
  termsTextSeven,
  termsTextEight,
  termsTextNine,
  termsTextTen,
} from '../components/utilities/StaticPagesText';
import { Link } from 'react-router-dom';

const TermsConditions = () => {
  useEffect(() => {
    document.title = 'Cypher Store | Terms & Conditions';
  }, []);

  return (
    <>
      <SharedPages text="terms & condtitions" />
      <div className="myContainer terms">
        <div className="sharedText">
          <h4>Welcome to KachaBazar!</h4>
          <p>{termsTextOne}</p>
          <p>{termsTextTwo}</p>
        </div>
        <div className="sharedText">
          <h4>Cookies</h4>
          <p>{termsTextTwoA}</p>
        </div>
        <div className="sharedText">
          <h4>License</h4>
          <p>{termsTextThree}</p>
          {/* </div> */}
          {/* <div className="sharedText"> */}
          <h5>You must not:</h5>
          <ul>
            {termsTextFour.map((text, index) => (
              <li key={index}>
                <p>{text}</p>
              </li>
            ))}
          </ul>
          <p>{termsTextFive}</p>
        </div>
        <div className="sharedText">
          <h4>Content Liability</h4>
          <p>{termsTextSix}</p>
        </div>
        <div className="sharedText">
          <h4>Your Privacy</h4>
          <p>
            Please read <Link to="/privacy-policy">Privacy Policy</Link>
          </p>
        </div>
        <div className="sharedText">
          <h4>Reservation of Rights</h4>
          <p>{termsTextSeven}</p>
        </div>
        <div className="sharedText">
          <h4>Removal of links from our website</h4>
          <p>{termsTextEight}</p>
        </div>
        <div className="sharedText">
          <h4>Disclaimer</h4>
          <p>{termsTextNine}</p>
          <ul>
            {termsTextTen.map((text, index) => (
              <li key={index}>
                <p>{text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};
export default TermsConditions;
