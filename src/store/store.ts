import { Reducer } from "redux";
import {
  PostDataRequestAction,
  PostDataRequestSuccessAction,
  PostDataRequestErrorAction,
  POST_DATA_REQUEST,
  POST_DATA_REQUEST_ERROR,
  POST_DATA_REQUEST_SUCCESS,
} from "./postData/action";
import { postDataReduser, PostDataState } from "./postData/reducer";
import {
  PostListRequestAction,
  PostListRequestErrorAction,
  PostListRequestSuccessAction,
  POST_LIST_REQUEST,
  POST_LIST_REQUEST_ERROR,
  POST_LIST_REQUEST_SUCCESS,
} from "./postList/action";
import { postListReduser, PostListState } from "./postList/reducer";

export interface RootState {
  postList: PostListState;
  postData: PostDataState;
}

const initialState: RootState = {
  postList: {
    loading: false,
    error: "",
    data: [],
    page: 1,
  },
  postData: {
    loading: false,
    error: "",
    data: {},
  },
};

type MyAction =
  | PostListRequestAction
  | PostListRequestSuccessAction
  | PostListRequestErrorAction
  | PostDataRequestAction
  | PostDataRequestSuccessAction
  | PostDataRequestErrorAction;

export const rootReduser: Reducer<RootState, MyAction> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case POST_LIST_REQUEST:
    case POST_LIST_REQUEST_SUCCESS:
    case POST_LIST_REQUEST_ERROR:
      return {
        ...state,
        postList: postListReduser(state.postList, action),
      };
    case POST_DATA_REQUEST:
    case POST_DATA_REQUEST_SUCCESS:
    case POST_DATA_REQUEST_ERROR:
      return {
        ...state,
        postData: postDataReduser(state.postData, action),
      };
    default:
      return state;
  }
};
