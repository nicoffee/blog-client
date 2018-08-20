// @flow

import * as React from 'react';
import {withRouter} from 'react-router';
import styled from 'styled-components';
import Header from '../containers/Header';
import AuthForm from '../containers/AuthForm';
import Theme from '../containers/Theme';
import Modal from '../containers/Modal';
import ModalPortal from './ModalPortal';
import BaseStyles from '../ui/BaseStyles';

const InnerContainer = styled.div`
  display: flex;
  max-width: ${props => props.theme.basicContentWidth};
  flex-direction: column;
  align-items: center;
  padding: 10px 20px 50px;
  margin: 78px auto 0;
`;

type Props = {
  isModalOpen: boolean,
  children?: React.Node,
};

const Layout = (props: Props) => (
  <Theme>
    <BaseStyles>
      <Header />
      {props.isModalOpen && (
        <ModalPortal>
          <Modal>
            <AuthForm />
          </Modal>
        </ModalPortal>
      )}
      <InnerContainer>{props.children}</InnerContainer>
    </BaseStyles>
  </Theme>
);

export default withRouter(Layout);
