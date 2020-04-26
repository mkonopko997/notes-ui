import React, {useEffect} from 'react';
import FacebookLogin, {ReactFacebookLoginInfo} from 'react-facebook-login';
import {getTokenFromSessionStorage, loginByFacebook} from "../../../store/user/actions";
import {useDispatch, useSelector} from "react-redux";
import {selectToken} from "../../../store/user/selectors";
import {Redirect} from "react-router";

const Login = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTokenFromSessionStorage);
    });

    const token = useSelector(selectToken);

    const handleFacebookLoginClick = async (res: ReactFacebookLoginInfo) => {
        if (!res.name || !res.email) {
            return;
        }
        await dispatch(
            loginByFacebook(res.id, res.name, res.email, res.accessToken),
        );
    };

    return !token ? (
        <div>
            <FacebookLogin
                appId={'659032574888018'}
                fields="name,email"
                size="small"
                callback={handleFacebookLoginClick}
            />
        </div>
    ) : (
        <Redirect
            to={{
                pathname: "/notes",
                state: {from: "/"}
            }}
        />
    )
};
export default Login;
