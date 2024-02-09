import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import Container from "../../components/common/Container";
import Card from "../../components/Card/Card";
import { cardDatas } from "../../data/data";

import "./LatestCard.css";
const LatestCard = () => {
  return (
    <Container>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {cardDatas?.map((cardData) => (
          <SwiperSlide key={cardData.id}>
            <Card key={cardData.id} cardData={cardData} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};

export default LatestCard;
