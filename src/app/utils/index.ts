import {setToken} from "../../store/user/actions";
import {store} from "../../store/store";

const API_URL = "http://localhost:8080/";

export const request = async (url: string, options: RequestInit = {}) => {
    const response = await fetch(
        url.startsWith('http') ? url : `${API_URL}${url}`,
        {
            ...options,
            headers: {
                authorization: store.getState().user.token || '',
                ...(options.headers || {'Content-Type': 'application/json'}),
            }

        },
    );

    //do logout when unauthorized
    if (response.status === 401) {
        store.dispatch(setToken());
        // eslint-disable-next-line no-restricted-globals
        location.reload();
    }

    if (response.status === 200) {
        return response.json();
    }
};
