import axios from "axios";
import { ActionCreator, Action } from "redux";
import { ThunkAction } from "redux-thunk";
import { RootState } from "../store";

export const POST_LIST_REQUEST = 'POST_LIST_REQUEST';
export type PostListRequestAction = {
  type: typeof POST_LIST_REQUEST;
};
export const postListRequest: ActionCreator<PostListRequestAction> = () => ({
  type: POST_LIST_REQUEST,
});

export const POST_LIST_REQUEST_SUCCESS = 'POST_LIST_REQUEST_SUCCESS';
export type PostListRequestSuccessAction = {
  type: typeof POST_LIST_REQUEST_SUCCESS;
  data: [];
  pages: number;
};

export const postListRequestSuccess: ActionCreator<PostListRequestSuccessAction> = (data: [], pages: number) => ({
  type: POST_LIST_REQUEST_SUCCESS,
  data,
  pages,
});

export const POST_LIST_REQUEST_ERROR = 'POST_LIST_REQUEST_ERROR';
export type PostListRequestErrorAction = {
  type: typeof POST_LIST_REQUEST_ERROR;
  error: string
}

export const postListRequestError: ActionCreator<PostListRequestErrorAction> = (error: string) => ({
  type: POST_LIST_REQUEST_ERROR,
  error,
});

export const listListRequestAsync = (pageNum: number): ThunkAction<void, RootState, unknown, Action<string>> => (dispatch) => {
  (async function load () {
    dispatch(postListRequest());
    try {
      const {data: {items, pages}} = await axios.get( 'https://testguru.ru/frontend-test/api/v1/ads?page=', {
        params: {
          page: pageNum,
        }
      });
      dispatch(postListRequestSuccess(items, pages));
    } catch (error) {
      dispatch(postListRequestError(String(error)));
    }
  })()
}
