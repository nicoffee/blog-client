// @flow

import * as React from 'react';
import styled from 'styled-components';
import * as variables from '../styleVariables';

const Styles = styled.div`
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
  children?: React.Node,
};

const BaseStyles = (props: Props) => <Styles>{props.children}</Styles>;

export default BaseStyles;
