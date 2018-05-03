import * as React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import Modal from '../components/Modal';
import SignInModal from '../components/SignInModal';

const StyledDiv = styled.div`
  margin-top: 80px;
`;

const Layout = ({children}) => (
  <React.Fragment>
    {/* <Header /> */}
    {/* <Modal>
      <SignInModal>Sign In</SignInModal>
    </Modal> */}
    <StyledDiv>{children}</StyledDiv>
  </React.Fragment>
);

export default Layout;
