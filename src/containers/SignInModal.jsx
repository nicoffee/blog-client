import * as React from 'react';
import {connect} from 'react-redux';
import {fetchLoginRequest, closeModal} from '../actions';
import {getErrorMessage} from '../reducers/user';
import SignInModal from '../components/SignInModal';

const SignInModalContainer = props => <SignInModal {...props} />;

const mapStateToProps = state => ({
  error: getErrorMessage(state),
});

export default connect(mapStateToProps, {fetchLoginRequest, closeModal})(
  SignInModalContainer
);
