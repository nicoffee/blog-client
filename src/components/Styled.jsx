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

export const ErrorMessage = styled.span`
  color: ${props => props.theme.errorColor};
  font-size: ${variables.XSMALL_FONT_SIZE};
`;
