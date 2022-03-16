import './categorymodal.scss';
import { connect } from 'react-redux';
import DisplaySpinner from '../DisplaySpinner';
import ErrorText from '../ErrorText';
import { MdArrowForwardIos } from 'react-icons/md';
import { BiMinus } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const CategoryModal = ({ error, loading, featuresData }) => {
  const [showChild, setShowChild] = useState(null);
  const [showField, setShowField] = useState(false);

  const showCategory = (text) => {
    featuresData.find((feature) => {
      if (feature.title === text.toLowerCase()) {
        setShowChild(text.toLowerCase());
        setShowField(!showField);
      }
    });
  };

  return (
    <div className="px-4 py-2">
      {loading ? (
        <DisplaySpinner />
      ) : error !== null ? (
        <ErrorText error={error} />
      ) : (
        featuresData && (
          <div className="categoryFeature">
            {featuresData.map((feature) => {
              const { id, imgUrl, title, subtitle } = feature;
              return (
                <div key={id}>
                  <div onClick={(e) => showCategory(e.target.innerText)}>
                    <div className="featureHeader d-flex justify-content-between align-items-center p-2">
                      <div className="toggler ">
                        <img src={imgUrl} alt="" />
                        <span>{title}</span>
                      </div>
                      <div>
                        <MdArrowForwardIos
                          style={{ color: 'gray' }}
                          className={
                            title === showChild &&
                            showField &&
                            'arrowIconRotate'
                          }
                        />
                      </div>
                    </div>
                    {title === showChild && showField && (
                      <ul>
                        {subtitle.map((list, index) => (
                          <li key={index} className="my-1">
                            <BiMinus style={{ color: 'gray' }} />
                            <Link to="" className="mx-1">
                              {list}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  error: state.features.error,
  loading: state.features.loading,
  featuresData: state.features.featuresData,
});

export default connect(mapStateToProps)(CategoryModal);
