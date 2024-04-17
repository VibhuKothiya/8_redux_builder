import { combineReducers } from "redux";
import userReducer from "./User/action/reducer/Reducer";


let rootReducer = combineReducers({
    userReducer,
})
 export default rootReducer;