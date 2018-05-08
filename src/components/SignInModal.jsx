import React from 'react';
import Formsy from 'formsy-react';
import styled from 'styled-components';
import FormGroup from './FormGroup';
import {Button} from './Styled';
import * as variables from '../types/style-variables';

const Overlay = styled.div`
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  overflow: hidden;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
`;

const StyledModal = styled.div`
  width: 40%;
  padding: 30px 40px;
  margin: 15% auto;
  background-color: ${variables.COLOR_WHITE};
  border-radius: ${variables.SECONDARY_BORDER_RADIUS};
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
  text-align: center;

  h2 {
    margin: 30px 0 60px;
    font-weight: 100;
  }

  button:disabled {
    width: 60%;
    padding: 40px;
    margin: 15% auto;
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
  modal: {value: null | HTMLDivElement} = React.createRef();

  state = {
    canSubmit: false,
  };

  submitForm(model) {
    this.props.fetchLoginRequest(model);
  }

  handleClick(e: SyntheticInputEvent<>) {
    if (e.target === this.modal.current) {
      this.props.closeModal();
    }
  }

  updateData(e: SyntheticInputEvent<>) {
    this.setState({[e.target.name]: e.target.value});
  }

  render() {
    const {error} = this.props;

    return (
      <Overlay innerRef={this.modal} onClick={e => this.handleClick(e)}>
        <StyledModal>
          <h2>Sign in with email</h2>
          <Formsy
            onValidSubmit={e => this.submitForm(e)}
            onValid={() => this.setState({canSubmit: true})}
            onInvalid={() => this.setState({canSubmit: false})}>
            <ModalInner>
              <FormGroup
                label="Your email"
                onChange={e => this.updateData(e)}
                name="email"
                value={this.state.email}
                validations="isEmail"
                validationError="This is not a valid email"
                required
              />
              <FormGroup
                label="Password"
                value={this.state.password}
                onChange={e => this.updateData(e)}
                type="password"
                name="password"
                required
              />
              {error && <Error>{error}</Error>}
            </ModalInner>
            <Button primary type="submit" disabled={!this.state.canSubmit}>
              Continue
            </Button>
          </Formsy>
        </StyledModal>
      </Overlay>
    );
  }
}

export default SignInModal;
