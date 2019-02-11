import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import articlesReducer from "./articlesReducer";

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  articles: articlesReducer
});
