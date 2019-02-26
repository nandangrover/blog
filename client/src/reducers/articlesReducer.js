import {
  ARTICLE_LIST,
  ITEMS_LOADING,
  ARTICLE_CONTENT,
  SEARCHED_ARTICLE
} from "../actions/types";

const initialState = {
  articles: [],
  individualArticle: [],
  searchedList: [],
  loading: true
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ARTICLE_LIST:
      return {
        ...state,
        articles: action.payload,
        loading: false
      };
    case ITEMS_LOADING:
      return {
        ...state,
        loading: true
      };
    case ARTICLE_CONTENT:
      return {
        ...state,
        individualArticle: action.payload,
        loading: false
      };
    case SEARCHED_ARTICLE:
      return {
        ...state,
        searchedList: action.payload,
        loading: false
      };
    default:
      return state;
  }
}
