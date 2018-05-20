import React from 'react';
import styled, {keyframes} from 'styled-components';
import ModalPortal from './ModalPortal';
import * as variables from '../types/style-variables';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const Overlay = styled.div`
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  overflow: hidden;
  width: 100%;
  height: 100%;
  animation: ${fadeIn} 200ms linear;
  background-color: rgba(0, 0, 0, 0.4);
`;

const StyledModal = styled.div`
  overflow: hidden;
  width: 40%;
  margin: 90px auto;
  background-color: ${props => props.theme.headerBackgroundColor};
  border-radius: ${variables.SMALL_BORDER_RADIUS};
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
  color: ${props => props.theme.fontColor};
`;

type Props = {
  closeModal: Function,
};

class Modal extends React.Component<Props> {
  modal: {value: null | HTMLDivElement} = React.createRef();

  handleClick(e: SyntheticInputEvent<>) {
    if (e.target === this.modal.current) {
      this.props.closeModal();
    }
  }

  render() {
    return (
      <ModalPortal>
        <Overlay innerRef={this.modal} onClick={e => this.handleClick(e)}>
          <StyledModal>{this.props.children}</StyledModal>
        </Overlay>
      </ModalPortal>
    );
  }
}

export default Modal;
