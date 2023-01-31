import { ERROR } from "../actions/Types";
const init = {
  error: "",
};

const errorReducer = (state = init, action) => {
  const { payload, type } = action;
  switch (type) {
    case ERROR:
      return { ...state, error: payload };
    default:
      return state;
  }
};

export default errorReducer;
