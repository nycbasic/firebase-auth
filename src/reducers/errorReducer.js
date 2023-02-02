import { ERROR } from "../actions/Types";
const init = {
  error: null,
};

const errorReducer = (state = init, action) => {
  const { payload, type } = action;
  switch (type) {
    case ERROR:
      return payload;
    default:
      return state;
  }
};

export default errorReducer;
