import React from 'react';
import Formsy from 'formsy-react';
import styled from 'styled-components';
import FormTabs from './FormTabs';
import FormGroup from './FormGroup';
import {Button, Error} from './Styled';

const Wrapper = styled.div`
  h2 {
    margin: 30px 0 60px;
    font-weight: 100;
  }
`;

const FormInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;

type Props = {
  fetchLoginRequest: Function,
  closeModal: Function,
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

  handleClick(e: SyntheticInputEvent<>) {
    if (e.target === this.modal.current) {
      this.props.closeModal();
    }
  }

  render() {
    const {error} = this.props;

    return (
      <Wrapper>
        <FormTabs
          active={this.state.activeForm}
          onSignInClick={() => this.setState({activeForm: 'signin'})}
          onSignUpClick={() => this.setState({activeForm: 'signup'})}
        />
        {this.state.activeForm === 'signin' ? (
          <h2>Sign in with email</h2>
        ) : (
          <h2>Sign up with email</h2>
        )}
        <Formsy onInvalid={() => this.setState({canSubmit: false})}>
          onValid={() => this.setState({canSubmit: true})}
          onValidSubmit={e => this.submitForm(e)}
          <FormInner>
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
          </FormInner>
          <Button disabled={!this.state.canSubmit} primary type="submit">
            Continue
          </Button>
        </Formsy>
      </Wrapper>
    );
  }
}

export default AuthForm;
