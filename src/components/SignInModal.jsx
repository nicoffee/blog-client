import * as React from 'react';
import styled from 'styled-components';
import Button from './Button';

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
  padding: 20px;
  border: 1px solid #888;
  width: 60%;
`;

class SignInModal extends React.Component {
  submitForm(e) {
    e.preventDefault();

    this.props.sigIn();
  }

  render() {
    return (
      <Overlay>
        <StyledModal>
          <h1>Sign in with email</h1>
          <form>
            <label htmlFor="email">Your email</label>
            <input type="text" id="email" />
            <Button primary type="submit" onClick={e => this.submitForm(e)}>
              Continue
            </Button>
          </form>
        </StyledModal>
      </Overlay>
    );
  }
}

export default SignInModal;
