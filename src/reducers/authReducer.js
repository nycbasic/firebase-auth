import { SIGN_UP } from "../actions/Types";

const authReducer = (state = {}, action ) => {
    const {payload, type} = action;
    switch(type) {
        case SIGN_UP: 
            console.log(SIGN_UP)
            return payload; 
        default:
            return state;
    }
}

export default authReducer;