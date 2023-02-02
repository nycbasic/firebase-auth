import { AUTH } from "../actions/Types";

const init = {uid: "", authenticated: false};

const authReducer = (state = init, action ) => {
    const {payload, type} = action;
    switch(type) {
        case AUTH:
            return payload; 
        default:
            return state;
    }
}

export default authReducer;