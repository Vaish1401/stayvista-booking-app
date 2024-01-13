import { Link } from "react-router-dom";
import { TbEye } from "react-icons/tb";

import Container from "../../components/common/Container";
import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

import "./SignUp.css";
import { SignInDefault } from "../../components/common/SignInDefault";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [passShow, setPassShow] = useState(false);

  const onSubmit = async (data) => {
    await axios
      .post("http://localhost:8800/api/auth/register", data)
      .then((res) => console.log("Data sended"));
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
          <h3 className="account-title">Sign up</h3>
          <form className="registration-form" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                {...register("username", {
                  required: true,
                  maxLength: 12,
                  minLength: 3,
                  pattern: /^[A-Za-z]+$/i,
                })}
                type="text"
              />
              {errors?.fullName?.type === "required" && (
                <p className="signup__error">This field is required</p>
              )}
              {errors?.fullName?.type === "maxLength" && (
                <p className="signup__error">
                  name cannot exceed 12 characters
                </p>
              )}
              {errors?.fullName?.type === "minLength" && (
                <p className="signup__error">
                  name cannot exceed less than 3 characters
                </p>
              )}
              {errors?.fullName?.type === "pattern" && (
                <p className="signup__error">Alphabetical characters only</p>
              )}
            </div>
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

            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password:</label>
              <input
                type="password"
                id="confirmPassword"
                {...register("confirmPassword", {
                  required: true,
                  minLength: 6,
                  maxLength: 20,
                  pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/,
                })}
              />
              {errors.confirmPassword?.type === "minLength" && (
                <p className="signup__error">
                  password cannot exceed less than 6 characters
                </p>
              )}
              {errors.confirmPassword?.type === "maxLength" && (
                <p className="signup__error">
                  password ame cannot exceed 15 characters
                </p>
              )}
              {errors.confirmPassword?.type === "pattern" && (
                <p className="signup__error">
                  least one numeric digit, one uppercase and one lowercase
                  letter
                </p>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="country">Country:</label>
              <input
                {...register("country", {
                  required: true,
                  maxLength: 15,
                  minLength: 2,
                  pattern: /^[A-Za-z]+$/i,
                })}
                type="text"
              />
              {errors?.country?.type === "required" && (
                <p className="signup__error">This field is required</p>
              )}
              {errors?.country?.type === "maxLength" && (
                <p className="signup__error">
                  country cannot exceed 15 characters
                </p>
              )}
              {errors?.country?.type === "minLength" && (
                <p className="signup__error">
                  country cannot exceed less than 2 characters
                </p>
              )}
              {errors?.country?.type === "pattern" && (
                <p className="signup__error">Alphabetical characters only</p>
              )}
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
              Have an account already? <Link to={"/login"}>Log in</Link>
            </p>
          </div>
          {/* <p className="text-error">{error}</p> */}
        </div>
      </Container>
    </div>
  );
};

export default SignUp;
