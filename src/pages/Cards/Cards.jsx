import { useContext } from "react";
import Card from "../../components/Card/Card";
import Container from "../../components/common/Container";
import Title from "../../components/common/Title";
import "./Cards.css";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import useFetch from "../../hooks/useFetch";
import Loading from "../../components/Loading/Loading";

const Cards = () => {
  const { data, loading, error, reFetch } = useFetch(
    `https://jobs-rvc2.onrender.com/cardDatas`
  );
  return (
    <Container>
      <div className="cards__container">
        <Title
          color="black"
          head="Discover Weekly"
          desc="An enim nullam tempor sapien gravida donec enim ipsum"
        />
        <div className={loading ? null : `cards`}>
          {loading ? (
            <Loading />
          ) : (
            data?.map((cardData) => (
              <Card key={cardData.id} cardData={cardData} />
            ))
          )}
        </div>
        <div className="cards__button" style={{ textAlign: "center" }}>
          <button className="card__btn">Get Started</button>
        </div>
      </div>
    </Container>
  );
};

export default Cards;
