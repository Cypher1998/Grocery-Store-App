import './footer.scss';
import { footerTexts } from '../../utilities/FooterText';
import colorLogo from '../../../assets/logo-color.svg';
import LgFooterDetails from '../../atom/lstopfootdetails/LgFooterDetails';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
      <LgFooterDetails />
      <div className="footerDisplay myContainer py-5 pt-lg-4">
        {footerTexts.map((footerText) => (
          <div className="footerText">
            <p className="header">{footerText.header}</p>
            {footerText.lists.map((list) => (
              <ul>
                <li>
                  <Link to={list.url} className="link">
                    {list.list}
                  </Link>
                </li>
              </ul>
            ))}
          </div>
        ))}
        <div className="addressLogo">
          <img src={colorLogo} alt="color-logo" />
          <p>
            987 Andre Plain Suite High Street 838, Lake Hestertown, USA Tell:
            02.356.1666 Email: ccruidk@test.com
          </p>
        </div>
      </div>
    </>
  );
};
export default Footer;
