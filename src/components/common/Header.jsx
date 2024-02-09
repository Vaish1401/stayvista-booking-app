import { Link, NavLink } from "react-router-dom";
import { useContext, useRef } from "react";

import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";

import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file

import "./Header.css";

import Container from "./Container";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Header = () => {
  const { state, logout } = useContext(AuthContext);

  const handleLogOut = () => {
    logout();
  };

  const headerEl = useRef();
  if (typeof window !== `undefined`) {
    let prevScrollPosition = window.pageYOffset;
    window.addEventListener("scroll", () => {
      const curScrollPosition = window.pageYOffset;
      const difference = prevScrollPosition - curScrollPosition;
      const { current } = headerEl;
      // setMobileNav(false)
      if (curScrollPosition > 100) {
        current?.classList.add("compaq");
      } else {
        current?.classList.remove("compaq");
      }
      if (difference < 0) {
        current?.classList.add("hide");
      } else {
        current?.classList.remove("hide");
      }
      prevScrollPosition = curScrollPosition;
    });
  }
  return (
    <header className="header-section" ref={headerEl}>
      <Container>
        <nav className="header__content">
          <div className="header__logo">
            <h2>Booking.com</h2>
          </div>
          <div className="header__menu">
            <ul className="header__menu--links header__links">
              <li>
                <Link className="header__menu--link active">Home</Link>
              </li>
              <li>
                <Link className="header__menu--link">Tours</Link>
              </li>
              <li>
                <Link className="header__menu--link">Destination</Link>
              </li>
              <li>
                <Link className="header__menu--link">Activity</Link>
              </li>
            </ul>
          </div>
          <div className="header__nav--links">
            <ul className="header__links links--button">
              {state.user ? (
                <>
                  <NavLink
                    to={"/account-settings"}
                    className="header__link--button button-primary"
                  >
                    Account
                  </NavLink>
                  <NavLink
                    className="header__link--button button-secondary"
                    onClick={handleLogOut}
                    to={"/"}
                  >
                    LogOut
                  </NavLink>
                </>
              ) : (
                <>
                  <NavLink
                    to={"/signup"}
                    className="header__link--button button-primary"
                  >
                    Register
                  </NavLink>
                  <NavLink
                    to={"/login"}
                    className="header__link--button button-secondary"
                  >
                    Sign in
                  </NavLink>
                </>
              )}
            </ul>
          </div>
        </nav>
      </Container>
    </header>
  );
};

export default Header;
