// @flow

import styled, {css} from 'styled-components';
import * as variables from '../types/style-variables';

export const Input = styled.input`
  font-size: ${variables.BASIC_FONT_SIZE};
  border: 1px solid ${variables.COLOR_GRAY_300};
  border-radius: ${variables.BASIC_BORDER_RADIUS};
  padding: 8px 12px;
  font-weight: 100;
  transition: border-color 200ms;
  outline: none;

  &:focus {
    border-color: ${props => props.theme.secondaryColor};
  }
`;

export const StyledFormGroup = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 30px;

  label {
    color: ${variables.SECONDARY_FONT_COLOR};
    font-size: ${variables.SMALL_FONT_SIZE};
    width: 30%;
  }

  div {
    display: flex;
    width: 70%;
  }
`;

export const Button = styled.button`
  border-radius: 3px;
  padding: 8px 16px;
  margin: 0 1em;
  color: ${props => props.theme.color};
  border: 1px solid ${props => props.theme.secondaryColor};
  font-size: 12px;
  cursor: pointer;
  transition: background-color 0.2s, color 0.2s;
  background-color: ${props => props.theme.buttonsBgColor};

  ${props =>
    props.primary &&
    css`
      background: ${props.theme.secondaryColor};
      color: ${props.theme.color};
    `};

  &:hover {
    background-color: ${props => props.theme.buttonsHoverBgColor};
    color: ${variables.COLOR_WHITE};
  }
`;
