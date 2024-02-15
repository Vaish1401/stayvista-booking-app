/* eslint-disable react/prop-types */
import { CiLocationOn } from "react-icons/ci";
import { IoTimeOutline } from "react-icons/io5";

import Container from "../common/Container";
import "./Card.css";
import Star from "../common/Star";
const Card = ({ cardData }) => {
  const { image, time, title, location, price } = cardData;
  return (
    <Container>
      <div className="card">
        <div className="card__image">
          <img src={image} alt="tour" />
        </div>
        <div className="card__content">
          <p className="card__time">
            <IoTimeOutline />
            {time}
          </p>
          <h4 className="card__title">{title}</h4>
          <p className="card__location">
            <CiLocationOn /> {location}
          </p>
          <span>
            <Star size="16" />
            <Star size="16" />
            <Star size="16" />
            <Star size="16" />
            <Star size="16" />
          </span>
          <div className="card__pb">
            <h4 className="card__price">${price}</h4>
            <button className="card__button">Explore</button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Card;
