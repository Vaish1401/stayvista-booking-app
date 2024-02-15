import LoadingSpinner from "../../assets/tube-spinner.svg";

const Loading = () => {
  return (
    <div
      style={{
        display: "flex",
        height: "80vh",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <img style={{ width: "250px" }} src={LoadingSpinner} alt="" />
    </div>
  );
};

export default Loading;
