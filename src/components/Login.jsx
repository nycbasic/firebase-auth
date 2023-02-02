import React, { useRef } from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router";
import AuthLayout from "./layout/auth/authLayout";

const LoginForm = (props) => {
  const emailRef = useRef("");
  const passwordRef = useRef("");

  const data = {
    title: "Login",
    inputNames: {
      first: "Email",
      second: "Password",
      third: null,
    },
    refs: {
      firstRef: emailRef,
      secondRef: passwordRef,
      thirdRef: null,
    },
    func: "Login",
    form: "login",
  };

  if (props.auth.authenticated) {
    return <Navigate to="/" replace={true} />;
  }

  return <AuthLayout data={data} />;
};

function mapStateToProps(state) {
  return {
    error: state.error,
    auth: state.auth,
  };
}

export default connect(mapStateToProps, null)(LoginForm);
