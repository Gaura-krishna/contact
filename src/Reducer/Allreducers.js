import Phase2 from "../Reducer/Contactfunction";
import { combineReducers } from "redux";


const allReducer = combineReducers(
  {
    contact: Phase2 ,
  }
);
export default allReducer