/* eslint-disable react/no-unescaped-entities */
const TestimonialItem = () => {
  return (
    <div className="testimonial__item">
      <p>
        "OMG! I cannot believe that I have got a brand new landing page after
        getting appmax. It was super easy to edit and publish.I have got a brand
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
            <p>Mila McSabbu</p>
            <p>Freelance Designer</p>
          </div>
        </div>
        <div className="testimonial__star"></div>
      </div>
    </div>
  );
};

export default TestimonialItem;
