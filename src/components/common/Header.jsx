import { Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { useContext, useRef, useState } from "react";

import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";

import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file

import "./Header.css";

import Container from "./Container";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { toast } from "react-toastify";

const Header = () => {
  const { state, logout, user, logOutWithGoogle } = useContext(AuthContext);

  const handleLogOut = () => {
    logOutWithGoogle()
      .then((result) => {
        toast.success("Signout successful!");
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.log(error.message);
        console.log(error);
      });
    logout();
  };
  const [isShow, setIsShow] = useState(false);
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
            <h2>StayVista</h2>
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
              {state.user || user ? (
                <>
                  <Link
                    to={"/account-settings"}
                    className="header__link--button button-primary"
                  >
                    Account
                  </Link>
                  <Link
                    className="header__link--button button-secondary"
                    onClick={handleLogOut}
                    to={"/"}
                  >
                    LogOut
                  </Link>
                </>
              ) : (
                <>
                  <Link
                    to={"/signup"}
                    className="header__link--button button-primary"
                  >
                    Register
                  </Link>
                  <Link
                    to={"/signin"}
                    className="header__link--button button-secondary"
                  >
                    Sign in
                  </Link>
                </>
              )}
            </ul>
          </div>
        </nav>

        {/* hello */}
        <nav className="responsive-header__content">
          <div className="responsive__nav-bar">
            <div className="responsive-header__logo">
              <h2>StayVista</h2>
            </div>
            <div className="mobile__nav--items">
              <li
                className="mobile__nab--hamburger"
                onClick={() => setIsShow(!isShow)}
              >
                {isShow ? (
                  <RxCross2 className="navIcon" />
                ) : (
                  <RxHamburgerMenu className="navIcon" />
                )}
              </li>
            </div>
          </div>
          {isShow && (
            <div className="responsive__menu-bar">
              <div className="responsive-header__menu">
                <ul className="responsive-header__menu--links">
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
                <ul className="responsive-header__links links--button">
                  {state.user || user ? (
                    <>
                      <Link
                        to={"/account-settings"}
                        className="header__link--button button-primary"
                      >
                        Account
                      </Link>
                      <Link
                        className="header__link--button button-secondary"
                        onClick={handleLogOut}
                        to={"/"}
                      >
                        LogOut
                      </Link>
                    </>
                  ) : (
                    <>
                      <Link
                        to={"/signup"}
                        className="header__link--button button-primary"
                      >
                        Register
                      </Link>
                      <Link
                        to={"/signin"}
                        className="header__link--button button-secondary"
                      >
                        Sign in
                      </Link>
                    </>
                  )}
                </ul>
              </div>
            </div>
          )}
        </nav>
      </Container>
    </header>
  );
};

export default Header;
