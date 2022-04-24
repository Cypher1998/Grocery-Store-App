import './footer.scss';
import { footerTexts } from '../../utilities/FooterText';
import logo from '../../../assets/default-monochrome.svg';
import LgFooterDetails from '../../atom/lstopfootdetails/LgFooterDetails';
import { Link } from 'react-router-dom';

const Footer = () => {
  const onClick = () => {
    document.documentElement.scrollTop = 0;
  };

  return (
    <>
      <LgFooterDetails />
      <div className="footerDisplay myContainer py-5 pt-lg-4">
        {footerTexts.map((footerText, index) => (
          <div className="footerText" key={index}>
            <p className="header">{footerText.header}</p>
            <ul>
              {footerText.lists.map((list, index) => (
                <li key={index} onClick={onClick}>
                  <Link to={list.url} className="link">
                    {list.list}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div className="addressLogo">
          <img src={logo} alt="color-logo" />
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
