// @flow

import styled, {css} from 'styled-components';
import * as variables from '../styleVariables';

const Button = styled.button`
  padding: 8px 16px;
  border: 1px solid ${props => props.theme.secondaryColor};
  margin: 0 1em;
  background-color: ${props => props.theme.buttonsBgColor};
  border-radius: ${variables.SMALL_BORDER_RADIUS};
  color: ${props => props.theme.color};
  cursor: pointer;
  font-size: 12px;

  ${props =>
    props.primary &&
    css`
      background: ${props.theme.secondaryColor};
      color: ${props.theme.color};
    `};

  transition: background-color 200ms, color 200ms;

  &:hover {
    background-color: ${props => props.theme.buttonsHoverBgColor};
    color: ${variables.COLOR_WHITE};
    color: #fff;
  }

  &:disabled {
    background-color: ${variables.COLOR_GRAY_400};
    border-color: ${variables.COLOR_GRAY_400};
    cursor: not-allowed;
    pointer-events: none;
  }
`;

export default Button;
