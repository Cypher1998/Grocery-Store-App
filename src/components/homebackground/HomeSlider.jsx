import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import CouponDiscount from './CouponDiscount';
import { backgroundText } from '../utilities/HomeBg';
import { Button } from 'react-bootstrap';

const HomeSlider = () => {
  return (
    <div className="homeSlider">
      <div className="myContainer">
        <div className="row g-4 pt-2 pt-md-2 px-sm-3">
          <div className="col-lg-7">
            <Swiper
              className=""
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={50}
              slidesPerView={1}
              pagination={{ clickable: true }}
            >
              {backgroundText.map((background, index) => (
                <SwiperSlide key={index}>
                  <div
                    className="swiper"
                    style={{
                      background: `url(${background.url}) center/cover no-repeat`,
                      color: `${background.color && background.color}`,
                    }}
                  >
                    <div
                      className="swiperText"
                      style={{
                        color: `${background.color && background.color}`,
                        transform: `${
                          background.transform && background.transform
                        }`,
                      }}
                    >
                      <h2>{background.bigText}</h2>
                      <p>{background.smallText}.</p>
                      <Button
                        variant={background.variant}
                        className="px-3 d-none d-sm-block"
                        onClick={background.onClick}
                      >
                        Shop Now
                      </Button>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className="d-none d-lg-block col-lg-5">
            <CouponDiscount />
          </div>
        </div>
      </div>
    </div>
  );
};
export default HomeSlider;
