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

export const login = (username: string, password: string) => async (
  dispatch: Dispatch,
) => {
  const response = await request('auth', {
    method: 'POST',
    body: JSON.stringify({ username, password }),
  });
  await dispatch(setToken(response.data));
  password = '';
};

export const loginByFacebook = (
  id: string,
  name: string,
  email: string,
  accessToken: string,
) => async (dispatch: Dispatch) => {
  const response = await request('users/login-by-facebook', {
    method: 'POST',
    body: JSON.stringify({ id, name, email, accessToken }),
  });

  if (response.result === ':)') {
    await dispatch(setToken(response.data.token));
  } else {
    alert(response.message);
  }
};
