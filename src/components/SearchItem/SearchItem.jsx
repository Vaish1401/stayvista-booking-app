/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import "./searchItem.css";

const SearchItem = ({ hotel }) => {
  const { image, title, location, score, price, id } = hotel;
  return (
    <>
      <div className="searchItem">
        <img src={image} alt="" className="siImg" />
        <div className="siDesc">
          <h1 className="siTitle">{title}</h1>
          <span className="siSubtitle">{location}</span>
          <span className="siFeatures">
            Entire studio • 1 bathroom • 21m² 1 full bed
          </span>
          <span className="siCancelOp">Free cancellation </span>
          <span className="siCancelOpSubtitle">
            You can cancel later, so lock in this great price today!
          </span>
        </div>
        <div className="siDetails">
          <div className="siRating">
            <span>Excellent</span>
            <button>{score}</button>
          </div>
          <div className="siDetailTexts">
            <span className="siPrice">${price}</span>
            <span className="siTaxOp">Includes taxes and fees</span>
            <Link to={`/hotels/${id}`}>
              <button className="siCheckButton">See availability</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchItem;
