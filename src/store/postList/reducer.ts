import { Reducer } from "react";
import {
  PostListRequestAction,
  PostListRequestSuccessAction,
  PostListRequestErrorAction,
  POST_LIST_REQUEST,
  POST_LIST_REQUEST_ERROR,
  POST_LIST_REQUEST_SUCCESS,
} from "./action";

export type PostListState = {
  loading: boolean;
  error: string;
  data: [];
  page: number;
};

type PostListActions =
  | PostListRequestAction
  | PostListRequestSuccessAction
  | PostListRequestErrorAction;

export const postListReduser: Reducer<PostListState, PostListActions> = (
  state,
  action
) => {
  switch (action.type) {
    case POST_LIST_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case POST_LIST_REQUEST_ERROR:
      return {
        ...state,
        error: action.error,
        loading: false,
      };
    case POST_LIST_REQUEST_SUCCESS:
      return {
        ...state,
        data: action.data,
        loading: false,
        page: action.page,
      };
    default:
      return state;
  }
};
