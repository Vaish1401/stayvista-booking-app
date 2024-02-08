import { CiLocationOn } from "react-icons/ci";
import { IoTimeOutline } from "react-icons/io5";

import Container from "../common/Container";
import "./Card.css";
import Star from "../common/Star";
const Card = () => {
  return (
    <Container>
      <div className="card">
        <div className="card__image">
          <img
            src="https://demo.ovatheme.com/tripgo/wp-content/uploads/2023/04/tour-hours-2-636x426.jpg"
            alt="tour"
          />
        </div>
        <div className="card__content">
          <p className="card__time">
            <IoTimeOutline />2 hours
          </p>
          <h4 className="card__title">
            Ecotourism Sabah sightseeing tours – 2 hours
          </h4>
          <p className="card__location">
            <CiLocationOn /> Sabah, Malaysia
          </p>
          <span>
            <Star size="16" />
            <Star size="16" />
            <Star size="16" />
            <Star size="16" />
            <Star size="16" />
          </span>
          <div className="card__pb">
            <h4 className="card__price">$10.00</h4>
            <button className="card__button">Explore</button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Card;
