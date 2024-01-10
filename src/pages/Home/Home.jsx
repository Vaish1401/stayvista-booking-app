import SearchHotel from "../../components/SearchHotel/SearchHotel";
import Container from "../../components/common/Container";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-section">
      <Container>
        <div className="home__container">
          <div className="home__content">
            <h1 className="home__section--title">Your jouney starts here</h1>
            <p className="home__section--desc">
              Discover and book amazing travel experiences with Tripgo
            </p>
          </div>
          <SearchHotel />
        </div>
      </Container>
    </div>
  );
};

export default Home;
