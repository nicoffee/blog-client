// @flow

import * as React from 'react';
import {connect} from 'react-redux';
import {
  getErrorMessage,
  getErrors,
  fetchLoginRequest,
  createUserRequest,
} from '../modules/user';
import AuthForm from '../components/AuthForm';

const AuthFormContainer = props => <AuthForm {...props} />;

const mapStateToProps = state => ({
  error: getErrorMessage(state),
  errors: getErrors(state),
});

export default connect(mapStateToProps, {
  fetchLoginRequest,
  createUserRequest,
})(AuthFormContainer);
