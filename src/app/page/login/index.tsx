import React, { useEffect } from 'react';
import FacebookLogin, { ReactFacebookLoginInfo } from 'react-facebook-login';
import {
  getTokenFromSessionStorage,
  loginByFacebook,
} from '../../../store/user/actions';
import { useDispatch, useSelector } from 'react-redux';
import { selectToken } from '../../../store/user/selectors';
import { Redirect } from 'react-router';
import { Grid } from '@material-ui/core';
import { Notes } from '@material-ui/icons';

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
    <Grid
      container
      direction="column"
      justify="center"
      alignItems="center"
      className={'height-98'}
    >
      <Notes style={{ fontSize: '19rem' }} />

      <FacebookLogin
        appId={'659032574888018'}
        fields="name,email"
        size="small"
        callback={handleFacebookLoginClick}
      />
    </Grid>
  ) : (
    <Redirect
      to={{
        pathname: '/notes',
        state: { from: '/' },
      }}
    />
  );
};
export default Login;
