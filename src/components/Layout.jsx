// @flow

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

const Wrapper = styled.div`
  background-color: ${props => props.theme.backgroundColor || '#fff'};
  color: ${props => props.theme.color || '#fff'};
`;

const DefaultTheme = {
  color: '#28abe3',
};

const DarkTheme = {
  color: '#fff',
  backgroundColor: '#212121',
  headerBackgroundColor: '#000',
};

type Props = {
  theme: string,
  isModalOpen: boolean,
  children?: React.Node,
};

const Layout = (props: Props) => (
  <ThemeProvider theme={props.theme === 'dark' ? DarkTheme : DefaultTheme}>
    <Wrapper>
      <Header />
      {props.isModalOpen && (
        <Modal>
          <SignInModal />
        </Modal>
      )}
      <InnerContainer>{props.children}</InnerContainer>
    </Wrapper>
  </ThemeProvider>
);

export default Layout;
