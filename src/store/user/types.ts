export const SET_TOKEN = 'SET_TOKEN';

export type SetTokenAction = {
  type: typeof SET_TOKEN;
  payload?: string;
};


export type UserAction = SetTokenAction;
