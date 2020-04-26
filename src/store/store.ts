import {ThunkAction, Action, combineReducers, createStore} from '@reduxjs/toolkit';
import counter from "./counter";
import user from "./user";

const rootReducer = combineReducers({
    counter,
    user
});

export const store = createStore(rootReducer);

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType,
    RootState,
    unknown,
    Action<string>>;
