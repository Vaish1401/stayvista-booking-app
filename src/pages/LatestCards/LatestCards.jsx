import Container from "../../components/common/Container";

import Title from "../../components/common/Title";
import LatestCard from "../../components/LatestCard/LatestCard";

import "./LatestCard.css";
const LatestCards = () => {
  return (
    <Container>
      <div className="cards__container">
        <Title
          color="black"
          head="Popular Tours"
          desc="An enim nullam tempor sapien gravida donec enim ipsum"
        />
        <div className="cards cards__slide">
          <LatestCard />
        </div>
        <div className="cards__button" style={{ textAlign: "center" }}>
          <button className="card__btn">Get Started</button>
        </div>
      </div>
    </Container>
  );
};

export default LatestCards;
