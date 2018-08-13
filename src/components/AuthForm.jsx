// @flow

import React, {Fragment} from 'react';
import FormTabs from './FormTabs';
import SignInForm from './SignInForm';
import SignUpForm from './SignUpForm';

type Props = {
  fetchLoginRequest: Function,
  signUpError?: string,
  signInError?: string,
};

type State = {
  email: string,
  password: string,
};

class AuthForm extends React.Component<Props, State> {
  state = {
    activeForm: 'signin',
  };

  switchActiveForm = activeForm => {
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
            error={signUpError}
            createUserRequest={createUserRequest}
          />
        )}
      </Fragment>
    );
  }
}

export default AuthForm;
