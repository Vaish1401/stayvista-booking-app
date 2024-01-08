import SearchHotel from "../../components/SearchHotel/SearchHotel";
import Container from "../../components/common/Container";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-section">
      <Container>
        <SearchHotel />
      </Container>
    </div>
  );
};

export default Home;
