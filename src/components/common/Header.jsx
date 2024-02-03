import { NavLink } from "react-router-dom";
import Container from "./Container";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file

import "./Header.css";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Header = () => {
  const { state, logout } = useContext(AuthContext);

  const handleLogOut = () => {
    logout();
  };
  return (
    <header className="header-section">
      <Container>
        <nav className="header__content">
          <div className="header__logo">
            <h2>Booking.com</h2>
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
