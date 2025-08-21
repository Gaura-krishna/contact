import Phase2 from "../Reducer/Contactfunction";
import { combineReducers } from "redux";
import todoReducer from "./todoReducer";


const allReducer = combineReducers(
  // {
  //   contact: Phase2 ,
  // },
  {
    todo:todoReducer
  }
);
export default allReducer