import Container from "../common/Container";
import Title from "../common/Title";
import "./featured.css";

const Featured = () => {
  return (
    <div className="featured-section">
      <Container>
        <Title
          head="Popular Destinations"
          desc="Discover some of the most loved destinations handpicked for your next perfect getaway. Whether you're seeking historic charm, coastal bliss, or mountain serenity — StayVista brings you the best stays across India."
        />
        <div className="featured">
          <div className="featuredItem">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Taj-Mahal.jpg/640px-Taj-Mahal.jpg"

              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Agra</h1>
              <button className="featured__button">Tours 01</button>
            </div>
          </div>


          <div className="featuredItem">
            <img
              src="https://images.unsplash.com/photo-1591888966529-3c33fef69b81?auto=format&fit=crop&w=800&q=80"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>New Delhi</h1>
              <button className="featured__button">Tours 02</button>
            </div>
          </div>


          <div className="featuredItem">
            <img
              src="https://images.unsplash.com/photo-1616151342445-f735d53a902b?auto=format&fit=crop&w=800&q=80"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Mumbai</h1>
              <button className="featured__button">Tours 03</button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Featured;
