import {CounterAction, DECREMANT, INCREMENT} from "./types";

export const increment = (): CounterAction => ({
  type: INCREMENT
});

export const decrement = (): CounterAction => ({
  type: DECREMANT
})
