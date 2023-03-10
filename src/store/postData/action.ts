import axios from "axios";
import { ActionCreator, Action } from "redux";
import { ThunkAction } from "redux-thunk";
import { RootState } from "../store";

export const POST_DATA_REQUEST = 'POST_DATA_REQUEST';
export type PostDataRequestAction = {
  type: typeof POST_DATA_REQUEST;
};
export const postDataRequest: ActionCreator<PostDataRequestAction> = () => ({
  type: POST_DATA_REQUEST,
});

export const POST_DATA_REQUEST_SUCCESS = 'POST_REQUEST_SUCCESS';
export type PostDataRequestSuccessAction = {
  type: typeof POST_DATA_REQUEST_SUCCESS;
  data: {};
};

export const postDataRequestSuccess: ActionCreator<PostDataRequestSuccessAction> = (data: {}) => ({
  type: POST_DATA_REQUEST_SUCCESS,
  data,
});

export const POST_DATA_REQUEST_ERROR = 'POST_REQUEST_ERROR';
export type PostDataRequestErrorAction = {
  type: typeof POST_DATA_REQUEST_ERROR;
  error: string
}

export const postDataRequestError: ActionCreator<PostDataRequestErrorAction> = (error: string) => ({
  type: POST_DATA_REQUEST_ERROR,
  error,
});

export const postDataRequestAsync = (id: string): ThunkAction<void, RootState, unknown, Action<string>> => (dispatch) => {
  (async function load () {
    dispatch(postDataRequest());
    try {
      const {data} = await axios.get(`https://testguru.ru/frontend-test/api/v1/ads/${id}`, {
    });
      dispatch(postDataRequestSuccess(data));
    } catch (error) {
      dispatch(postDataRequestError(String(error)));
    }
  })()
}
