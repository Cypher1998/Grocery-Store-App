import './sharedcategoryslider.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { categoryFeatures } from '../categoryFeat';
import { Navigation, A11y } from 'swiper';
import { useNavigate } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/navigation';

const SharedCategorySlider = () => {
  const navigate = useNavigate();

  return (
    <div className="py-5">
      <Swiper
        modules={[Navigation, A11y]}
        spaceBetween={12}
        slidesPerView={1}
        navigation
        loop={true}
        breakpoints={{
          374: {
            slidesPerView: 2,
          },
          460: {
            slidesPerView: 3.25,
          },
          576: {
            slidesPerView: 3.75,
          },
          668: {
            slidesPerView: 4.5,
          },
          768: {
            slidesPerView: 5.25,
          },
          880: {
            slidesPerView: 5.8,
          },
          992: {
            slidesPerView: 6.5,
          },
          1096: {
            slidesPerView: 7.35,
          },
          1200: {
            slidesPerView: 8.25,
          },
        }}
      >
        {categoryFeatures.map((feature) => {
          const titleUrl = feature.title.split(' ');
          const newTitleUrl = titleUrl.join('-');

          return (
            <SwiperSlide key={feature.id}>
              <div
                className="featuresShared"
                onClick={() => navigate(`/main-category/${newTitleUrl}`)}
              >
                <div>
                  <img src={feature.imgUrl} alt="catgImg" />
                </div>
                <p>{feature.title}</p>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default SharedCategorySlider;
