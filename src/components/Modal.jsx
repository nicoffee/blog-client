// @flow

import * as React from 'react';
import styled, {keyframes} from 'styled-components';
import ModalPortal from './ModalPortal';
import ConfirmDialog from './ConfirmDialog';
import AuthForm from '../containers/AuthForm';

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
  animation: ${fadeIn} ${props => props.theme.basicAnimationPreset};
  background-color: rgba(0, 0, 0, 0.4);
`;

const StyledModal = styled.div`
  overflow: hidden;
  width: 40%;
  margin: 90px auto;
  background-color: ${props => props.theme.headerBackgroundColor};
  border-radius: ${props => props.theme.smallBorderRadius};
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
  color: ${props => props.theme.fontColor};
`;

type Props = {
  closeModal: Function,
  confirmAction: Function,
  children: React.Node,
  type?: ?string,
};

class Modal extends React.PureComponent<Props> {
  modal = React.createRef();

  handleClick(e: SyntheticInputEvent<>) {
    if (e.target === this.modal.current) {
      this.props.closeModal();
    }
  }

  renderContent = (type: ?string) => {
    switch (type) {
      case 'auth':
        return <AuthForm />;
      case 'confirm':
        return <ConfirmDialog onConfirm={this.props.confirmAction} />;
      default:
        return this.props.children;
    }
  };

  render() {
    return (
      <ModalPortal>
        <Overlay innerRef={this.modal} onClick={e => this.handleClick(e)}>
          <StyledModal>{this.renderContent(this.props.type)}</StyledModal>
        </Overlay>
      </ModalPortal>
    );
  }
}

export default Modal;
