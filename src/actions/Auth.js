import { AUTH, ERROR } from "./Types";
import { auth } from "../config/Firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

export const userAuthorized = (user) => (dispatch) => {
  return dispatch({
    type: AUTH,
    payload: user,
  });
};

export const signUp = (email, password) => async (dispatch) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    if (res.user) {
      return dispatch({
        type: AUTH,
        payload: true,
      });
    }
  } catch (err) {
    return dispatch({
      type: ERROR,
      payload: err,
    });
  }
};

export const login = (email, password) => async (dispatch) => {
  try {
    const res = await signInWithEmailAndPassword(auth, email, password);
    // if (res.user) {
    //   return userAuthorized(true);
    // }
  } catch (err) {
    switch (err.code) {
      case "auth/user-not-found":
        return dispatch({
          type: ERROR,
          payload: "User does not exist!",
        });
      case "auth/wrong-password":
        return dispatch({
          type: ERROR,
          payload: "Password is incorrect!",
        });
      default:
        return null;
    }
  }
};

export const signUserOut = () => {
  try {
    signOut(auth);
  } catch (err) {}
};
