import axios from "axios";
import {
  ITEMS_LOADING,
  ARTICLE_LIST
} from "./types";
//Get Articles
export const getArticles = () => dispatch => {
  dispatch(setItemsLoading());
  axios
    .get("/api/CMS/article")
    .then(res =>  
    dispatch({
      type: ARTICLE_LIST,
      payload: res.data
    }) 
  );
};

export const setItemsLoading = () => {
  return {
    type: ITEMS_LOADING
  };
};