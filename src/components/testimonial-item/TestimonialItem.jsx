/* eslint-disable react/no-unescaped-entities */

import "./testimonialItem.css";
import Star from "../common/Star";
const TestimonialItem = () => {
  return (
    <div className="testimonial__item">
      <p className="testimonial__item-desc">
        "OMG! I cannot believe that I have got a brand new landing page after
        <br />
        getting appmax. It was super easy to edit and publish.I have got a brand
        <br />
        new landing page."
      </p>
      <div className="testimonial__item--container">
        <div className="testimonial__users">
          <div className="user__img">
            <img
              src="https://demo.ovatheme.com/tripgo/wp-content/uploads/2022/07/Mila-McSabbu-2.png"
              alt=""
            />
          </div>
          <div className="name-job">
            <p className="name">Mila McSabbu</p>
            <p>Freelance Designer</p>
          </div>
        </div>
        <div className="testimonial__star">
          <Star size="20" />
          <Star size="20" />
          <Star size="20" />
          <Star size="20" />
          <Star size="20" />
        </div>
      </div>
    </div>
  );
};

export default TestimonialItem;
