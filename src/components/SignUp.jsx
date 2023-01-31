import React, { useRef } from "react";
import { connect } from "react-redux";
import { SignUp } from "../actions/Auth";
import AuthLayout from "./layout/auth/authLayout";

const SignUpForm = (props) => {
  console.log(props.error);
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

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
    func: "Login",
    login: false,
  };

  return <AuthLayout data={data} />;
};

function mapStateToProps(state) {
  return {
    auth: state.auth,
    error: state.error,
  };
}

export default connect(mapStateToProps, { SignUp })(SignUpForm);
