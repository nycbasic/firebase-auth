import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { getAuth } from "@firebase/auth";
import { connect } from "react-redux";
import { userAuthorized } from "../actions/Auth";
import SignUp from "./SignUp";
import Login from "./Login";
import Dashboard from "./Dashboard";

const App = ({ userAuthorized }) => {
  const auth = getAuth();
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      console.log(user)
      if (user) {
        userAuthorized({ uid: user.uid, authenticated: true });
      } else {
        userAuthorized({ uid: "", authenticated: false });
      }
    });
    return unsubscribe;
  }, [userAuthorized, auth]);
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Dashboard />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </Router>
  );
};

function mapStateToProps(state) {
  return { auth: state.auth };
}

export default connect(mapStateToProps, { userAuthorized })(App);
