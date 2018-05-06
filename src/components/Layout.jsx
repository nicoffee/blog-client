// @flow

import * as React from 'react';
import styled from 'styled-components';
import Header from '../containers/Header';
import SignInModal from '../containers/SignInModal';
import Theme from '../containers/Theme';
import Modal from './Modal';

const InnerContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 80px auto 0;
    max-width: 700px;
    padding: 10px 20px;
`;

const Wrapper = styled.div`
  background-color: ${props => props.theme.secondaryBackgroundColor};
  color: ${props => props.theme.primaryColor};
  transition: background-color 200ms ease-out, color 200ms ease-out;

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
