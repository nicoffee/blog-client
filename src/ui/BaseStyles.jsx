// @flow

import React from 'react';
import styled from 'styled-components';

const Styles = styled.div`
  background-color: ${props => props.theme.secondaryBackgroundColor};
  color: ${props => props.theme.fontColor};
  transition: background-color ${props => props.theme.basicAnimationPreset},
    color ${props => props.theme.basicAnimationPreset};

  a {
    color: inherit;
    text-decoration: none;
  }

  p {
    font-size: ${props => props.theme.basicFontSize};
    font-weight: 100;
  }

  h1 {
    font-size: ${props => props.theme.h1FontSize};
  }

  h2 {
    font-size: ${props => props.theme.h2FontSize};
  }
`;

type Props = {
  children?: React.Node,
};

const BaseStyles = (props: Props) => <Styles>{props.children}</Styles>;

export default BaseStyles;
