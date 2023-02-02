import React from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router";
import { Button } from "react-bootstrap";
import { signUserOut } from "../actions/Auth";

const Dashboard = (props) => {
  return (
    <>
      <h1>Dashboard</h1>
      <Button onClick={() => signUserOut()}>Sign Out!</Button>
    </>
  );
};

function mapStateToProps(state) {
  return {
    auth: state.auth,
  };
}

export default connect(mapStateToProps, { signUserOut })(Dashboard);
