/* eslint-disable no-useless-escape */
/* eslint-disable react/no-unescaped-entities */
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";

import Container from "../../components/common/Container";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";

import "./SignIn.css";
import { SignInDefault } from "../../components/common/SignInDefault";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const SignIn = () => {
  const { login, state } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);

  const from = location.state?.from?.pathname || "/";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [passShow, setPassShow] = useState(false);

  const onSubmit = (inputData) => {
    const { email, password } = inputData;
    login(email, password);
  };
  navigate(from, { replace: true });

  if (state.user) {
    return <Navigate to={"/account-settings"} />;
  }
  return (
    <div className="signup-section">
      <Container>
        <div className="registration__form--container">
          <h3 className="account-title">Sign In</h3>
          <form className="registration-form" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                {...register("email", {
                  required: true,
                  pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                })}
                id="email"
              />
              {errors?.email?.type === "pattern" && (
                <p className="signup__error">Invalid email address!</p>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <div className="password-container">
                <input
                  // type={`${passShow ? "text" : "password"}`}
                  type="password"
                  id="password"
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    maxLength: 20,
                    pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/,
                  })}
                />
                {/* <TbEye
                  onClick={() => setPassShow(!passShow)}
                  id="togglePassword"
                /> */}
                {errors.password?.type === "minLength" && (
                  <p className="signup__error">
                    password cannot exceed less than 6 characters
                  </p>
                )}
                {errors.password?.type === "maxLength" && (
                  <p className="signup__error">
                    password ame cannot exceed 15 characters
                  </p>
                )}
                {errors.password?.type === "pattern" && (
                  <p className="signup__error">
                    least one numeric digit, one uppercase and one lowercase
                    letter
                  </p>
                )}
              </div>
            </div>

            <button className="signUp__button" type="submit">
              Sign In
            </button>
          </form>
          <SignInDefault
          // handleSignInWithGithub={handleSignInWithGithub}
          // handleSignInWithGoogle={handleSignInWithGoogle}
          />
          <div className="go__signup">
            <p className="newuser">
              Don't have an account? <Link to={"/signup"}>Sign up</Link>
            </p>
          </div>
          {/* <p className="text-error">{error}</p> */}
        </div>
      </Container>
    </div>
  );
};

export default SignIn;
