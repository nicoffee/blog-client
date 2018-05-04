import * as React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import Modal from '../components/Modal';
import SignInModalContainer from '../containers/SignInModalContainer';

const StyledDiv = styled.div`
  margin-top: 80px;
`;

class Layout extends React.Component {
  constructor() {
    super();

    this.state = {isModalOpen: false};
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        {this.state.isModalOpen && (
          <Modal>
            <SignInModalContainer />
          </Modal>
        )}
        <StyledDiv>{this.props.children}</StyledDiv>
      </React.Fragment>
    );
  }
}

export default Layout;
