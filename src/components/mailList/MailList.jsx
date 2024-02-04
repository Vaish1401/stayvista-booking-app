/* eslint-disable react/no-unescaped-entities */
import "./mailList.css";

const MailList = () => {
  return (
    <div className="newsletter">
      <div className="newsletter__container">
        <h1 className="newsletter__title">Save time, save money!</h1>
        <span className="newsletter__desc">
          Sign up and we'll send the best deals to you
        </span>
        <div className="newsletter__input--content">
          <input type="text" placeholder="Your Email" />
          <button>Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default MailList;
