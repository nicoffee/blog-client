// @flow

import * as React from 'react';
import {connect} from 'react-redux';
import {
  getSignUpError,
  getSignInError,
  getErrors,
  fetchLoginRequest,
  createUserRequest,
} from '../modules/user';
import AuthForm from '../components/AuthForm';

const AuthFormContainer = props => <AuthForm {...props} />;

const mapStateToProps = state => ({
  signUpError: getSignUpError(state),
  signInError: getSignInError(state),
  errors: getErrors(state),
});

export default connect(mapStateToProps, {
  fetchLoginRequest,
  createUserRequest,
})(AuthFormContainer);
