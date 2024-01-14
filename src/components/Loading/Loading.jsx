import Container from "../common/Container";
import LoadingSpinner from "../../assets/tube-spinner.svg";

const Loading = () => {
  return (
    <Container>
      <div>
        <img src={LoadingSpinner} alt="" />
      </div>
    </Container>
  );
};

export default Loading;
