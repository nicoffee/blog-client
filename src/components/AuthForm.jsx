import React from 'react';
import Formsy from 'formsy-react';
import styled, { css } from 'styled-components';
import FormGroup from './FormGroup';
import { Button } from './Styled';
import * as variables from '../types/style-variables';

const Wrapper = styled.div`
  h2 {
    margin: 30px 0 60px;
    font-weight: 100;
  }

  button:disabled {
    background-color: ${variables.COLOR_GRAY_400};
    border-color: ${variables.COLOR_GRAY_400};
    border-radius: 8px;
    cursor: not-allowed;
    pointer-events: none;
  }
`;

const ModalInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;

const Error = styled.span`
  color: red;
`;

const Tabs = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const Tab = styled.div`
  cursor: pointer;

  ${props =>
    props.active &&
    css`
      color: ${props.theme.secondaryColor};
      font-weight: bold;
    `};

  transition: font-weight 200ms, color 200ms;
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

class SignInModal extends React.Component<Props, State> {
  state = {
    canSubmit: false,
    activeForm: 'signin',
  };

  modal: { value: null | HTMLDivElement } = React.createRef();

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

  updateData(e: SyntheticInputEvent<>) {
    this.setState({ [e.target.name]: e.target.value });
  }

  changeValue = event => {
    this.setValue(event.currentTarget.value);
  };

  render() {
    const { error } = this.props;

    return (
      <Wrapper>
        <Tabs>
          <Tab
            active={this.state.activeForm === 'signup'}
            onClick={() => this.setState({ activeForm: 'signup' })}>
            Sign Up
          </Tab>
          <Tab
            active={this.state.activeForm === 'signin'}
            onClick={() => this.setState({ activeForm: 'signin' })}>
            Sign In
          </Tab>
        </Tabs>
        {this.state.activeForm === 'signin' ? (
          <h2>Sign in with email</h2>
        ) : (
            <h2>Sign up with email</h2>
          )}
        <Formsy
          onInvalid={() => this.setState({ canSubmit: false })}>
          onValid={() => this.setState({ canSubmit: true })}
          onValidSubmit={e => this.submitForm(e)}
          <ModalInner>
            <FormGroup
              label="Your email"
              name="email"
              onChange={e => this.changeValue(e)}
              required
              type="text"
              validationError="This is not a valid email"
              validations="isEmail"
            />
            <FormGroup
              label="Password"
              name="password"
              onChange={e => this.changeValue(e)}
              required
              type="password"
            />
            {error && <Error>{error}</Error>}
          </ModalInner>
          <Button disabled={!this.state.canSubmit} primary type="submit">
            Continue
          </Button>
        </Formsy>
      </Wrapper>
    );
  }
}

export default SignInModal;
