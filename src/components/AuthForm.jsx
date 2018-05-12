import React, {Fragment} from 'react';
import Formsy from 'formsy-react';
import styled from 'styled-components';
import FormTabs from './FormTabs';
import FormGroup from './FormGroup';
import {Button, Error} from './Styled';

const Header = styled.h1`
  margin: 30px 0 60px;
  font-weight: 100;
`;

const FormInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  padding: 30px 40px;
`;

type Props = {
  fetchLoginRequest: Function,
  error?: string,
};

type State = {
  email: string,
  password: string,
};

class AuthForm extends React.Component<Props, State> {
  state = {
    canSubmit: false,
    activeForm: 'signin',
  };

  modal: {value: null | HTMLDivElement} = React.createRef();

  submitForm(model) {
    if (this.state.activeForm === 'signin') {
      this.props.fetchLoginRequest(model);
      return;
    }

    this.props.createUserRequest(model);
  }

  render() {
    const {error} = this.props;

    return (
      <Fragment>
        <FormTabs
          activeForm={this.state.activeForm}
          onSignInClick={() => this.setState({activeForm: 'signin'})}
          onSignUpClick={() => this.setState({activeForm: 'signup'})}
        />
        <FormInner>
          <Header>
            {this.state.activeForm === 'signin'
              ? 'Sign in with email'
              : 'Sign up with email'}
          </Header>
          <Formsy
            onInvalid={() => this.setState({canSubmit: false})}
            onValid={() => this.setState({canSubmit: true})}
            onValidSubmit={e => this.submitForm(e)}>
            <FormGroup
              label="Your email"
              name="email"
              required
              type="text"
              validationError="This is not a valid email"
              validations="isEmail"
            />
            <FormGroup
              label="Password"
              name="password"
              required
              type="password"
            />
            {error && <Error>{error}</Error>}
            <Button disabled={!this.state.canSubmit} primary type="submit">
              Continue
            </Button>
          </Formsy>
        </FormInner>
      </Fragment>
    );
  }
}

export default AuthForm;
