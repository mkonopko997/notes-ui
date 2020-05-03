import { SET_TOKEN, UserAction } from './types';

export type UserStore = {
  readonly token?: string;
};

const initial: UserStore = {};

export default (state = initial, action: UserAction) => {
  if (action.type === SET_TOKEN) {
    return {
      ...state,
      token: 'Bearer ' + action.payload,
    };
  }
  return state;
};
