import { SIGN_UP } from "./Types";
import { auth } from "../config/Firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

export const SignUp = (email, password) => async (dispatch) => {
  const res = await createUserWithEmailAndPassword(auth, email, password);
  console.log(res.user)
//   return dispatch({
//     type: SIGN_UP,
//     payload: "SOME TEST!",
//   });
};
