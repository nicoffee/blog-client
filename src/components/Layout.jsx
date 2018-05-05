import * as React from 'react';
import styled, {ThemeProvider} from 'styled-components';
import Header from '../containers/Header';
import Modal from '../components/Modal';
import SignInModal from '../containers/SignInModal';

const InnerContainer = styled.div`
  margin: 80px auto;
  max-width: 700px;
  padding: 10px 20px;
`;

const DefaultTheme = {
  color: '#28abe3',
};

const DarkTheme = {
  color: 'black',
};

const Layout = props => (
  <ThemeProvider theme={DefaultTheme || DarkTheme}>
    <React.Fragment>
      <Header />
      {props.isModalOpen && (
        <Modal>
          <SignInModal />
        </Modal>
      )}
      <InnerContainer>{props.children}</InnerContainer>
    </React.Fragment>
  </ThemeProvider>
);

export default Layout;
