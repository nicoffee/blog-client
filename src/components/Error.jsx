// @flow

import * as React from 'react';
import styled from 'styled-components';
import Button from './Button';
import * as variables from '../styleVariables';

const StyledError = styled.div`
  display: flex;
  flex-direction: column;
  color: ${variables.COLOR_RED_600};
`;

type Props = {
  request: Function,
  errorMessage: string,
};

const Error = (props: Props) => (
  <StyledError>
    <h1>{props.errorMessage}</h1>
    <Button onClick={props.request}>Retry</Button>
  </StyledError>
);

export default Error;
