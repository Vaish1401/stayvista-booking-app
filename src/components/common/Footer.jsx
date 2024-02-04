import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF, FaInstagram, FaPinterest } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import { CiMail } from "react-icons/ci";

import visa from "../../assets/visa.png";
import master from "../../assets/master-cart.png";
import americanexpress from "../../assets/americanexpress.png";

import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer__container">
          <div className="footer__container--item">
            <h2 className="logo foote__item--head">Booking.com</h2>
            <p className="footer__desc">
              There are many variations of passages of Lorem <br /> the Ipsum
              available but it is the majority of <br /> suffered that a
              alteration in that some dummy <br /> text.
            </p>
            <div className="footer-icons">
              <FaXTwitter />
              <FaFacebookF />
              <FaInstagram />
              <FaPinterest />
            </div>
          </div>
          <div className="footer__container--item">
            <h5 className="foote__item--head">Support</h5>
            <ul>
              <li>
                <Link>Customer Support</Link>
              </li>
              <li>
                <Link>Privacy & Policy</Link>
              </li>
              <li>
                <Link>Contact Channels</Link>
              </li>
            </ul>
          </div>
          <div className="footer__container--item">
            <h5 className="foote__item--head">About Us</h5>
            <ul>
              <li>
                <Link>Our Story</Link>
              </li>
              <li>
                <Link>Travel Blog & Tips</Link>
              </li>
              <li>
                <Link>Working With Us</Link>
              </li>
              <li>
                <Link>Be Our Partner</Link>
              </li>
            </ul>
          </div>
          <div className="footer__container--item">
            <h5 className="foote__item--head">Contact Info</h5>
            <div className="footer__location--item">
              <a className="footer__location">
                455 West Orchard Street Kings Mountain, NC 280867
              </a>
            </div>
            <div className="footer__contact">
              <div className="contact__icon">
                <FiPhoneCall />
              </div>
              <ul className="contact__li">
                <li>
                  <Link>+088 (006) 992-99-10</Link>
                </li>
              </ul>
            </div>
            <div className="footer__contact">
              <div className="contact__icon">
                <CiMail />
              </div>
              <ul className="contact__li">
                <li>
                  <Link>example@gmail.com</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer__sub-footer">
          <div className="copyright">
            © {new Date().getFullYear()} Rahulfordev All Rights Reserved.
          </div>
          <div className="footer__payment--mathod">
            <img src={visa} alt="visa-card" />
            <img src={master} alt="master-card" />
            <img src={americanexpress} alt="american-card" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
