import Container from "../common/Container";
import { FaRegUserCircle } from "react-icons/fa";
import "./Account.css";
import { Link, Outlet } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Account = () => {
  const { state, user } = useContext(AuthContext);
  const { username, email } = state.user || user;

  return (
    <div className="account-section">
      <Container>
        <div className="account__user--infos">
          <h2 className="account__title">Account</h2>

          <div className="account__user--fnfo">
            <span className="account__user--name">
              {username} {user.displayName},
            </span>
            <span className="account__user--email"> {email}</span>
          </div>
          <div className="account__user--cards">
            <Link to={"personal-info"}>
              <div className="account__user--card">
                <div className="account__card--icon">
                  <FaRegUserCircle />
                </div>
                <div className="account__card--info">
                  <h4>Personal info</h4>
                  <p>Provide personal details and how we can reach you</p>
                </div>
              </div>
            </Link>
            <Link to={"personal-info"}>
              <div className="account__user--card">
                <div className="account__card--icon">
                  <FaRegUserCircle />
                </div>
                <div className="account__card--info">
                  <h4>Personal info</h4>
                  <p>Provide personal details and how we can reach you</p>
                </div>
              </div>
            </Link>
            <Link to={"personal-info"}>
              <div className="account__user--card">
                <div className="account__card--icon">
                  <FaRegUserCircle />
                </div>
                <div className="account__card--info">
                  <h4>Personal info</h4>
                  <p>Provide personal details and how we can reach you</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </Container>
      <Outlet />
    </div>
  );
};

export default Account;
