// @flow

import React, {Fragment} from 'react';
import FormTabs from './FormTabs';
import SignInForm from './SignInForm';
import SignUpForm from './SignUpForm';

type Props = {
  fetchLoginRequest: Function,
  createUserRequest: Function,
  signUpError?: string,
  signInError?: string,
};

type State = {
  activeForm: string,
};

class AuthForm extends React.PureComponent<Props, State> {
  state = {
    activeForm: 'signin',
  };

  switchActiveForm = (activeForm: string) => {
    this.setState({activeForm});
  };

  render() {
    const {
      signInError,
      signUpError,
      fetchLoginRequest,
      createUserRequest,
    } = this.props;

    return (
      <Fragment>
        <FormTabs
          activeForm={this.state.activeForm}
          onSignInClick={() => this.switchActiveForm('signin')}
          onSignUpClick={() => this.switchActiveForm('signup')}
        />

        {this.state.activeForm === 'signin' ? (
          <SignInForm
            error={signInError}
            fetchLoginRequest={fetchLoginRequest}
          />
        ) : (
          <SignUpForm
            createUserRequest={createUserRequest}
            error={signUpError}
          />
        )}
      </Fragment>
    );
  }
}

export default AuthForm;
