// @flow

import styled, {css} from 'styled-components';
import * as variables from '../types/style-variables';

export const Input = styled.input`
  width: 100%;
  padding: 8px 12px;
  border: 1px solid ${variables.COLOR_GRAY_300};
  border-radius: ${variables.BASIC_BORDER_RADIUS};
  font-size: ${variables.BASIC_FONT_SIZE};
  font-size: 18px;
  font-weight: 100;
  outline: none;
  transition: border-color 200ms;

  &:focus {
    border-color: ${props => props.theme.secondaryColor};
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  padding: 8px 12px;
  border: 1px solid ${variables.COLOR_GRAY_300};
  border-radius: ${variables.BASIC_BORDER_RADIUS};
  font-size: ${variables.BASIC_FONT_SIZE};
  font-size: 18px;
  font-weight: 100;
  outline: none;
  transition: border-color 200ms;

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
    width: 30%;
    color: ${variables.SECONDARY_FONT_COLOR};
    font-size: ${variables.SMALL_FONT_SIZE};
  }

  div {
    display: flex;
    width: 70%;
  }
`;

export const Button = styled.button`
  padding: 8px 16px;
  border: 1px solid ${props => props.theme.secondaryColor};
  margin: 0 1em;
  background-color: ${props => props.theme.buttonsBgColor};
  border-radius: 3px;
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
`;
