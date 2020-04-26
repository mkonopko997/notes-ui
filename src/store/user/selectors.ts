import {RootState} from "../store";

export const selectToken = (store: RootState) => store.user.token;
