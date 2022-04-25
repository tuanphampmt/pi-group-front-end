import { combineReducers } from "redux";
import testOnlineReducer from "./test-online.js";
import authUserReducer from "./auth-user";

const rootReducer = combineReducers({
    testOnline: testOnlineReducer,
    authUser: authUserReducer
});

export default rootReducer;
