import { SET_TOKEN, UserAction } from './types';
import { Dispatch } from 'redux';
import {request} from "../../app/utils";

export const setToken = (token?: string): UserAction => {
  token
    ? sessionStorage.setItem('token', token)
    : sessionStorage.removeItem('token');
  return {
    type: SET_TOKEN,
    payload: token,
  };
};

export const getTokenFromSessionStorage = async (
  dispatch: Dispatch,
) => {
  const token = await sessionStorage.getItem('token');
  if (token) {
    const r = await dispatch(setToken(token));
    return r;
  }
};

export const loginByFacebook = (
  id: string,
  name: string,
  email: string,
  accessToken: string,
) => async (dispatch: Dispatch) => {
  const response = await request('auth', {
    method: 'POST',
    body: JSON.stringify({ id, name, email, accessToken }),
  });

  if (response) {
    await dispatch(setToken(response.token));
  } else {
    alert("Auth failed");
  }
};
