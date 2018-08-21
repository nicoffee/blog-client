// @flow

import * as React from 'react';
import styled from 'styled-components';
import Button from '../ui/Button';

const Header = styled.h1`
  margin: 30px 0 60px;
  font-weight: 100;
`;

const Inner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${props => props.theme.largePadding};

  form {
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
  }
`;

const Confirm = ({onConfirm}) => (
  <Inner>
    <Header>You sure?</Header>
    <Button onClick={onConfirm}>Yes</Button>
  </Inner>
);

export default Confirm;
