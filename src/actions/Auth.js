import { SIGN_UP, ERROR } from "./Types";
import { auth } from "../config/Firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export const SignUp = (email, password) => async (dispatch) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    return dispatch({
      type: SIGN_UP,
      payload: res.user,
    });
  } catch (err) {
    return dispatch({
      type: ERROR,
      payload: err,
    });
  }

  //   return dispatch({
  //     type: SIGN_UP,
  //     payload: "SOME TEST!",
  //   });
};
