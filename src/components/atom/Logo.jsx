import logo from '../../assets/logo-light.svg';
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
