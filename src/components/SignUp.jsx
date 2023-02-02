import React, { useRef } from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router";
import { signUp } from "../actions/Auth";
import AuthLayout from "./layout/auth/authLayout";

const SignUpForm = (props) => {
  console.log(props.error);
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const confirmPasswordRef = useRef("");

  const data = {
    title: "Sign Up!",
    inputNames: {
      first: "Email",
      second: "Password",
      third: "Confirm Password",
    },
    refs: {
      firstRef: emailRef,
      secondRef: passwordRef,
      thirdRef: confirmPasswordRef,
    },
    func: "SignUp",
    form: "signup",
  };

   if (props.auth.authenticated) {
     return <Navigate to="/" replace={true} />;
   }

  return <AuthLayout data={data} />;
};

function mapStateToProps(state) {
  return {
    auth: state.auth,
    error: state.error,
  };
}

export default connect(mapStateToProps, { signUp })(SignUpForm);
