import logo from '../../assets/default-monochrome-white.svg';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <>
      <Link to="/">
        <img src={logo} alt="logo" className="logoImg" />
      </Link>
    </>
  );
};

export default Logo;
