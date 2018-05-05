import * as React from 'react';
import styled from 'styled-components';
import {FormGroup, Input, Button} from './Styled';

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
`;

const ModalInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;

const Error = styled.span`
  color: red;
`;

class SignInModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };

    this.modal = React.createRef();
  }

  submitForm(e) {
    e.preventDefault();

    this.props.fetchLoginRequest({
      email: this.state.email,
      password: this.state.password,
    });
  }

  handleClick(e) {
    if (e.target === this.modal.current) {
      this.props.closeModal();
    }
  }

  updateData(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  render() {
    const {error} = this.props;

    return (
      <Overlay innerRef={this.modal} onClick={e => this.handleClick(e)}>
        <StyledModal>
          <h1>Sign in with email</h1>
          <form>
            <ModalInner>
              <FormGroup>
                <label htmlFor="email">Your email</label>
                <div>
                  <Input
                    value={this.state.email}
                    onChange={e => this.updateData(e)}
                    type="text"
                    id="email"
                    name="email"
                  />
                </div>
              </FormGroup>
              <FormGroup>
                <label htmlFor="pass">Password</label>
                <div>
                  <Input
                    value={this.state.password}
                    onChange={e => this.updateData(e)}
                    type="text"
                    id="pass"
                    name="password"
                  />
                </div>
              </FormGroup>
              {error && <Error>{error}</Error>}
              <Button primary type="submit" onClick={e => this.submitForm(e)}>
                Continue
              </Button>
            </ModalInner>
          </form>
        </StyledModal>
      </Overlay>
    );
  }
}

export default SignInModal;
