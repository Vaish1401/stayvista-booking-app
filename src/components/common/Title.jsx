/* eslint-disable react/prop-types */
const Title = ({ head, desc, color }) => {
  return (
    <div className="featured__title" style={{ color: `${color}` }}>
      <h1>{head}</h1>
      <p>{desc}</p>
    </div>
  );
};

export default Title;
