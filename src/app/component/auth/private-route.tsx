import {Redirect, Route} from "react-router";
import * as React from "react";
import {useDispatch, useSelector} from "react-redux";
import {selectToken} from "../../../store/user/selectors";
import {getTokenFromSessionStorage} from "../../../store/user/actions";
import {useEffect} from "react";

// @ts-ignore
export default function PrivateRoute({children, ...rest}) {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTokenFromSessionStorage);
    });

    const token = useSelector(selectToken);

    return (
        <Route {...rest}
            render={({location}) =>
               !!token ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/",
                            state: {from: location}
                        }}
                    />
                )
            }
        />
    );
}
