// @flow

import * as React from 'react';
import styled from 'styled-components';
import Header from '../containers/Header';
import SignInModal from '../containers/SignInModal';
import Theme from '../containers/Theme';
import Modal from './Modal';

const InnerContainer = styled.div`
  margin: 80px auto;
  max-width: 700px;
  padding: 10px 20px;
`;

const Wrapper = styled.div`
  background-color: ${props => props.theme.backgroundColor || '#fff'};
  color: ${props => props.theme.primaryColor};

  a {
    text-decoration: none;
  }

  button:disabled {
    background-color: #757575;
  }
`;

type Props = {
  isModalOpen: boolean,
  children?: React.Node,
};

const Layout = (props: Props) => (
  <Theme>
    <Wrapper>
      <Header />
      {props.isModalOpen && (
        <Modal>
          <SignInModal />
        </Modal>
      )}
      <InnerContainer>{props.children}</InnerContainer>
    </Wrapper>
  </Theme>
);

export default Layout;
