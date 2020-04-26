import {ThunkAction, Action, combineReducers, createStore, applyMiddleware} from '@reduxjs/toolkit';
import counter from "./counter";
import user from "./user";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    counter,
    user
});

export const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
);

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType,
    RootState,
    unknown,
    Action<string>>;
