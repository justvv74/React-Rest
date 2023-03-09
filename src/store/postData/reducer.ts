import { Reducer } from "react";
import { POST_DATA_REQUEST_ERROR, PostDataRequestAction, PostDataRequestErrorAction, PostDataRequestSuccessAction, POST_DATA_REQUEST, POST_DATA_REQUEST_SUCCESS } from "./action";

export type PostDataState = {
  loading: boolean;
  error: string;
  data: {};
}

type PostDataActions = (
  PostDataRequestAction |
  PostDataRequestSuccessAction |
  PostDataRequestErrorAction
)

export const postDataReduser: Reducer<PostDataState, PostDataActions> = (state, action) => {
  switch(action.type) {
    case POST_DATA_REQUEST:
      return {
        ...state,
        loading: true,
    };
    case POST_DATA_REQUEST_ERROR:
      return {
        ...state,
        error: action.error,
        loading: false,
      }
      case POST_DATA_REQUEST_SUCCESS:
        return {
          ...state,
          data: action.data,
          loading: false,
        }
    default:
      return state;
  }
}
