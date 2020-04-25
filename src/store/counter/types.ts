export const INCREMENT = 'INCREMENT';
export const DECREMANT = 'DECREMANT';

export type IncrementAction = {
  type: typeof INCREMENT;
};

export type DecrementAction = {
  type: typeof DECREMANT;
};

export type CounterAction = IncrementAction | DecrementAction;
