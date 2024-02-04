import "./Testimonial.css";
import TestimonialItem from "../../components/testimonial-item/TestimonialItem";

const Testimonial = () => {
  return (
    <div className="testimonial__container">
      <div className="container">
        <div className="testimonial__title">
          <h6>Testimonials</h6>
          <h3>What Our Happy Clients Say</h3>
        </div>
        <TestimonialItem />
      </div>
    </div>
  );
};

export default Testimonial;
