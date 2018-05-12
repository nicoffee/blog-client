// @flow

import * as React from 'react';
import {withRouter} from 'react-router';
import styled from 'styled-components';
import Header from '../containers/Header';
import AuthForm from '../containers/AuthForm';
import Theme from '../containers/Theme';
import Modal from '../containers/Modal';
import ModalPortal from './ModalPortal';
import * as variables from '../types/style-variables';

const InnerContainer = styled.div`
  display: flex;
  max-width: ${variables.BASIC_CONTENT_WIDTH};
  flex-direction: column;
  align-items: center;
  padding: 10px 20px 50px;
  margin: 78px auto 0;
`;

const BaseStyles = styled.div`
  background-color: ${props => props.theme.secondaryBackgroundColor};
  color: ${props => props.theme.fontColor};
  transition: background-color 200ms ease-out, color 200ms ease-out;

  a {
    color: inherit;
    text-decoration: none;
  }

  button:disabled {
    background-color: ${variables.COLOR_GRAY_600};
  }

  p {
    font-size: ${variables.BASIC_FONT_SIZE};
    font-weight: 100;
  }

  h1 {
    font-size: ${variables.H1_FONT_SIZE};
  }

  h2 {
    font-size: ${variables.H2_FONT_SIZE};
  }
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
