import React from 'react';
import Formsy from 'formsy-react';
import styled from 'styled-components';
import Input from './Input';
import FormGroup from './FormGroup';
import {Button} from './Styled';

const Overlay = styled.div`
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.4);
`;

const StyledModal = styled.div`
  background-color: #fefefe;
  margin: 15% auto;
  padding: 40px;
  border: 1px solid #888;
  width: 60%;
  border-radius: 8px;

  button:disabled {
    background-color: #bdbdbd;
    border-color: #bdbdbd;
    pointer-events: none;
    cursor: not-allowed;
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
          <h1>Sign in with email</h1>
          <Formsy
            onValidSubmit={e => this.submitForm(e)}
            onValid={() => this.setState({canSubmit: true})}
            onInvalid={() => this.setState({canSubmit: false})}>
            <ModalInner>
              <FormGroup label="Your email">
                <Input
                  onChange={e => this.updateData(e)}
                  name="email"
                  validations="isEmail"
                  validationError="This is not a valid email"
                  required
                />
              </FormGroup>
              <FormGroup label="Password">
                <Input
                  value={this.state.password}
                  onChange={e => this.updateData(e)}
                  type="password"
                  name="password"
                  required
                />
              </FormGroup>
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
