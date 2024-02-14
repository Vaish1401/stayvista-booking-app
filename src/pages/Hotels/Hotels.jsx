import { useLocation } from "react-router-dom";
import Container from "../../components/common/Container";
import "./Hotels.css";
const Hotels = () => {
  const location = useLocation();
  console.log(location.state);
  return (
    <Container>
      <div className="hotels">
        <h1>Hotels</h1>
      </div>
    </Container>
  );
};

export default Hotels;
