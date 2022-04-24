import './pagesstaticstyle.scss';
import notFoundImg from '../assets/404.svg';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
const NotFound = () => {
  useEffect(() => {
    document.title = 'Cypher Store | 404';
  }, []);

  return (
    <div className="notFoundPageDiv">
      <div className="myContainer notFoundPage">
        <img src={notFoundImg} alt="404-img" />
        <div className="notFoundText text-center my-4 mb-md-5">
          <h6>Page not found!</h6>
          <p>Sorry! This page is not found! Please try again.</p>
        </div>
        <div className="notFoundBtn">
          <Link to="/">Try again</Link>
        </div>
      </div>
    </div>
  );
};
export default NotFound;