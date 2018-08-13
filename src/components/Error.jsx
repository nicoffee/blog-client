// @flow

import * as React from 'react';
import styled from 'styled-components';
import Button from './Button';

const StyledError = styled.div`
  display: flex;
  flex-direction: column;
  color: ${props => props.theme.errorColor};
`;

type Props = {
  request: Function,
  errorMessage: string,
};

const Error = (props: Props) => (
  <StyledError>
    <h2>{props.errorMessage}</h2>
    <Button onClick={props.request}>Retry</Button>
  </StyledError>
);

export default Error;
