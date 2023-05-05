import axios from "axios";
import { ActionCreator, Action } from "redux";
import { ThunkAction } from "redux-thunk";
import { RootState } from "../store";

export const POST_LIST_REQUEST = "POST_LIST_REQUEST";
export type PostListRequestAction = {
  type: typeof POST_LIST_REQUEST;
};
export const postListRequest: ActionCreator<PostListRequestAction> = () => ({
  type: POST_LIST_REQUEST,
});

export const POST_LIST_REQUEST_SUCCESS = "POST_LIST_REQUEST_SUCCESS";
export type PostListRequestSuccessAction = {
  type: typeof POST_LIST_REQUEST_SUCCESS;
  data: [];
  page: number;
};

export const postListRequestSuccess: ActionCreator<
  PostListRequestSuccessAction
> = (data: [], page: number) => ({
  type: POST_LIST_REQUEST_SUCCESS,
  data,
  page,
});

export const POST_LIST_REQUEST_ERROR = "POST_LIST_REQUEST_ERROR";
export type PostListRequestErrorAction = {
  type: typeof POST_LIST_REQUEST_ERROR;
  error: string;
};

export const postListRequestError: ActionCreator<PostListRequestErrorAction> = (
  error: string
) => ({
  type: POST_LIST_REQUEST_ERROR,
  error,
});

export const listListRequestAsync =
  (pageNum: number): ThunkAction<void, RootState, unknown, Action<string>> =>
  (dispatch) => {
    dispatch(postListRequest());
    axios
      .get(`https://gorest.co.in/public/v2/posts?page=${pageNum}`)
      .then((res) => {
        dispatch(
          postListRequestSuccess(res.data, res.headers["x-pagination-pages"])
        );
      })
      .catch((err) => {
        dispatch(postListRequestError(String(err)));
      });
  };
