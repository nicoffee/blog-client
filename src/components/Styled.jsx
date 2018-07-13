// @flow

import styled, {css} from 'styled-components';
import * as variables from '../constants/style-variables';

export const Input = styled.input`
  padding: 8px 12px;
  border: 1px solid ${variables.COLOR_GRAY_300};
  border-radius: ${variables.SMALL_BORDER_RADIUS};
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
  padding: 8px 12px;
  border: 1px solid ${variables.COLOR_GRAY_300};
  border-radius: ${variables.SMALL_BORDER_RADIUS};
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
  width: 100%;
  margin-bottom: 30px;

  label {
    display: inline-block;
    margin-bottom: 10px;
    color: ${variables.SECONDARY_FONT_COLOR};
    font-size: ${variables.SMALL_FONT_SIZE};
  }

  input,
  textarea {
    margin-bottom: 8px;
  }

  div {
    display: flex;
    flex-direction: column;
  }
`;

export const Button = styled.button`
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

export const ErrorMessage = styled.span`
  color: ${props => props.theme.errorColor};
  font-size: ${variables.XSMALL_FONT_SIZE};
`;
