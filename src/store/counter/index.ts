import { CounterAction, DECREMANT, INCREMENT } from './types';

export type CounterStore = {
  readonly value: number;
};

const initial: CounterStore = {
  value: 0,
};

export default (
  state: CounterStore = initial,
  action: CounterAction,
): CounterStore => {
  if (action.type === INCREMENT) {
    return {
      ...state,
      value: state.value + 1,
    };
  }
  if (action.type === DECREMANT) {
    return {
      ...state,
      value: state.value - 1,
    };
  }
  return state;
};
