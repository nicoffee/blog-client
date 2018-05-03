import * as React from 'react';
import {connect} from 'react-redux';
import {fetchLoginRequest} from '../actions';
import SignInModal from '../components/SignInModal';

const SignInModalContainer = props => <SignInModal {...props} />;

export default connect(null, {
  fetchLoginRequest,
})(SignInModalContainer);
