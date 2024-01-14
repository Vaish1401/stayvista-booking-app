import { NavLink } from "react-router-dom";
import Container from "./Container";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
// import { RxHamburgerMenu } from "react-icons/rx";
// import { GoSignOut } from "react-icons/go";
// import { RxCross2 } from "react-icons/rx";
// import defaultUser from "../../assets/default__user.png";
import { IoIosHelpCircleOutline } from "react-icons/io";

import language from "../../assets/language.png";

import "./Header.css";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Header = () => {
  // const [isShow, setIsShow] = useState(false);
  const { state, logout } = useContext(AuthContext);

  const handleLogOut = () => {
    logout();
  };
  return (
    <header className="header-section">
      <Container>
        <nav className="header__content">
          {/* <div className="mobile__nav--bar">
            <div className="mobile__nav--logo">
              <Logo />
            </div>
            <ul className="mobile__nav--items">
              {user?.email ? (
                <li className="mobile__nav--user header__link">
                  <img
                    src={user?.photoURL ? user?.photoURL : defaultUser}
                    alt=""
                  />
                  <span>{user.displayName}</span>
                </li>
              ) : null}
              <li
                className="mobile__nab--hamburger"
                onClick={() => setIsShow(!isShow)}
              >
                {isShow ? <RxCross2 /> : <RxHamburgerMenu />}
              </li>
            </ul>
          </div> */}
          <div className="header__logo">
            <h2>Booking.com</h2>
          </div>
          <div className="header__nav--links">
            <ul className="header__links">
              <NavLink className="header__link">USD</NavLink>

              <NavLink className="header__link">
                <div className="header__link--image">
                  <img src={language} alt="" />
                </div>
              </NavLink>

              <NavLink className="header__link">
                <IoIosHelpCircleOutline />
              </NavLink>
            </ul>
            <ul className="header__links links--button  ">
              <NavLink className="header__link">List your property</NavLink>

              {state.user ? (
                <NavLink onClick={handleLogOut} to={"/"}>
                  LogOut
                </NavLink>
              ) : (
                <>
                  <NavLink
                    to={"/signup"}
                    className="header__link--button button"
                  >
                    Register
                  </NavLink>
                  <NavLink
                    to={"/login"}
                    className="header__link--button button"
                  >
                    Sign in
                  </NavLink>
                </>
              )}
            </ul>
          </div>
        </nav>

        {/* mobile menu li start */}

        {/* {isShow && (  
          <div className="mobile__menu">
            <ul className="mobile__menu--header__links">
              <NavLink className="mobile__menu--header__link" to={"/"}>
                Home
              </NavLink>

              <NavLink className="mobile__menu--header__link" to={"/jobs"}>
                Jobs
              </NavLink>

              <NavLink className="mobile__menu--header__link" to={"/about"}>
                About
              </NavLink>

              <NavLink className="mobile__menu--header__link" to={"/contact"}>
                Contact
              </NavLink>

              <NavLink className="mobile__menu--header__link" to={"/favorite"}>
                Favorite
              </NavLink>
            </ul>

            {user ? (
              <ul className="mobile__menu--header__links">
                <li>
                  <Link
                    onClick={handleSignOut}
                    className="mobile__menu--header__link"
                  >
                    Sign Out <GoSignOut />
                  </Link>
                </li>
              </ul>
            ) : (
              <ul className="mobile__menu--header__links">
                <li>
                  <NavLink
                    className="mobile__menu--header__link"
                    to={"/signup"}
                  >
                    Sign Up
                  </NavLink>
                </li>
                <li>
                  <NavLink className="mobile__menu--header__link" to={"/login"}>
                    Sign In
                  </NavLink>
                </li>
              </ul>
            )}
          </div>
        )} */}
        {/* mobile menu li end */}
      </Container>
    </header>
  );
};

export default Header;
