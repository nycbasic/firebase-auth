import React, { useRef } from "react";
import AuthLayout from "./layout/auth/authLayout";

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();

  return <AuthLayout />;
};

export default Login;
