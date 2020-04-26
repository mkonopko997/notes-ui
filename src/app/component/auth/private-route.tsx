import {Redirect, Route} from "react-router";
import * as React from "react";
import {useSelector} from "react-redux";
import {selectToken} from "../../../store/user/selectors";

// @ts-ignore
export default function PrivateRoute({children, ...rest}) {
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
