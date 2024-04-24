import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import Container from "../../components/common/Container";
import Card from "../../components/Card/Card";

import "./LatestCard.css";
import { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import Loading from "../Loading/Loading";
const LatestCard = () => {
  const [slidesPerView, setSlidesPerView] = useState(4);
  const [shuffledCardDatas, setShuffledCardDatas] = useState([]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setSlidesPerView(4);
      } else if (window.innerWidth >= 768) {
        setSlidesPerView(3);
      } else {
        setSlidesPerView(1);
      }
    };

    // Set initial slidesPerView based on window width
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const { data, loading, error, reFetch } = useFetch(
    `https://jobs-rvc2.onrender.com/cardDatas`
  );
  useEffect(() => {
    const shuffledArray = [...data].sort(() => Math.random() - 0.5);
    setShuffledCardDatas(shuffledArray);
  }, [data]);

  return (
    <Container>
      <Swiper
        slidesPerView={slidesPerView}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {loading ? (
          <Loading />
        ) : (
          shuffledCardDatas?.map((cardData) => (
            <SwiperSlide key={cardData.id}>
              <Card key={cardData.id} cardData={cardData} />
            </SwiperSlide>
          ))
        )}
      </Swiper>
    </Container>
  );
};

export default LatestCard;
