import { combineReducers } from "redux";
import reducer from "../reducer";

const rootReducers = combineReducers({tasks: reducer});
export default rootReducers