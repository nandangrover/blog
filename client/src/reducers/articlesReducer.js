import {
  ARTICLE_LIST,
  ITEMS_LOADING
} from "../actions/types";

const initialState = {
  articles: [],
  loading: false
};

export default function(state = initialState, action) {
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
    default:
      return state;
  }
}
