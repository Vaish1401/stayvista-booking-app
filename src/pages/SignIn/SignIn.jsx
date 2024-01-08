/* eslint-disable no-useless-escape */
/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";

import Container from "../../components/common/Container";
import { useState } from "react";
import { useForm } from "react-hook-form";

import "./SignIn.css";
import { SignInDefault } from "../../components/common/SignInDefault";

const SignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [passShow, setPassShow] = useState(false);

  const onSubmit = (data) => {
    console.log(data);
  };

  // const handleSignUp = () => {
  //   //   event.preventDefault();
  //   //   const form = event.target;
  //   //   const name = form.fullname.value;
  //   //   const email = form.email.value;
  //   //   const password = form.password.value;
  //   //   const confirm = form.confirmPassword.value;
  //   //   console.log(name, email, password, confirm);
  //   //   setError("");
  //   //   if (name === "" && email === "" && password === "" && confirm === "") {
  //   //     setError("Complete all fields in the form");
  //   //     return;
  //   //   } else if (password !== confirm) {
  //   //     setError("Your password did not match");
  //   //     return;
  //   //   } else if (password.length < 6) {
  //   //     setError("password must be 6 characters or longer");
  //   //     return;
  //   //   }
  //   //   createUser(email, password)
  //   //     .then((result) => {
  //   //       const loggedUser = result.user;
  //   //       toast.success("Signup successful!", {
  //   //         toastId: "Rahul Ali",
  //   //       });
  //   //       // console.log(loggedUser);
  //   //       // navigate("/");
  //   //     })
  //   //     .catch((error) => {
  //   //       console.log(error);
  //   //       setError(error.message);
  //   //     });
  //   // };
  //   // const handleSignInWithGoogle = () => {
  //   //   signInWithGoogle()
  //   //     .then((result) => {
  //   //       const user = result.user;
  //   //       // console.log(user);
  //   //       toast.success("Signin successful!", {
  //   //         toastId: "Rahul Ali",
  //   //       });
  //   //       navigate("/");
  //   //     })
  //   //     .catch((error) => {
  //   //       console.log(error.message);
  //   //       setError(error.message);
  //   //     });
  // };

  // const handleSignInWithGithub = () => {
  //   signInWithGithub()
  //     .then((result) => {
  //       console.log(result.user);
  //       toast.success("Signin successful!", {
  //         toastId: "Rahul Ali",
  //       });
  //       // toast("login Successfull");
  //       navigate("/");
  //     })
  //     .catch((error) => {
  //       const errorCode = error.code;
  //       console.log(errorCode);
  //       setError(error.message);
  //     });
  // };
  return (
    <div className="signup-section">
      <Container>
        <div className="registration__form--container">
          <h3 className="account-title">Sign In</h3>
          <form className="registration-form" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                {...register("email", {
                  required: true,
                  pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                })}
                type="email"
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
                  type={`${passShow ? "text" : "password"}`}
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
              Sign Up
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
