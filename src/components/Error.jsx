// @flow

import * as React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import * as variables from '../constants/style-variables';

const StyledError = styled.div`
  display: flex;
  flex-direction: column;
  color: ${variables.COLOR_RED_600};
`;

type Props = {
  errorMessage: string,
};

const Error = (props: Props) => (
  <StyledError>
    <h1>{props.errorMessage}</h1>
    <Link to="/">Back to main page</Link>
  </StyledError>
);

export default Error;
