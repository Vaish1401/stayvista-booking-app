import { useContext } from "react";
import "./searchItem.css";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const SearchItem = () => {
  const { cardDatas } = useContext(AuthContext);
  return (
    <>
      {cardDatas.map((card) => (
        <div className="searchItem" key={card.id}>
          <img src={card.image} alt="" className="siImg" />
          <div className="siDesc">
            <h1 className="siTitle">{card.title}</h1>
            <span className="siSubtitle">{card.location}</span>
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
              <button>{card.score}</button>
            </div>
            <div className="siDetailTexts">
              <span className="siPrice">{card.price}</span>
              <span className="siTaxOp">Includes taxes and fees</span>
              <button className="siCheckButton">See availability</button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default SearchItem;
