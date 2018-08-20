// @flow

import styled, {css} from 'styled-components';

const Button = styled.button`
  padding: ${props => props.theme.basicButtonPadding};
  border: 1px solid ${props => props.theme.secondaryColor};
  background-color: ${props => props.theme.buttonsBgColor};
  border-radius: ${props => props.theme.smallBorderRadius};
  color: ${props => props.theme.buttonsFontColor};
  cursor: pointer;
  font-size: ${props => (props.fontSize ? props.fontSize : '12px')};
  font-weight: ${props => props.theme.basicFontWeight};

  ${props =>
    props.primary &&
    css`
      background: ${props.theme.secondaryColor};
      color: ${props.theme.buttonsFontColor};
    `};

  &:hover {
    background-color: ${props => props.theme.buttonsHoverBgColor};
    color: ${props => props.theme.fontColor};
    color: #fff;
  }

  ${props =>
    props.danger &&
    css`
      background: ${props.theme.buttonDangerBgColor};
      color: ${props.theme.buttonDangerColor};
      border-color: ${props.theme.buttonDangerBgColor};

      &:hover {
        background: ${props.theme.buttonDangerHoverBgColor};
        color: ${props.theme.buttonDangerColor};
        border-color: ${props.theme.buttonDangerHoverBgColor};
      }
    `};

  transition: background-color ${props => props.theme.basicAnimationPreset},
    color ${props => props.theme.basicAnimationPreset};

  &:active {
    background-color: ${props => props.theme.buttonsActiveBgColor};
  }

  &:focus {
    outline: none;
  }

  &:disabled {
    background-color: ${props => props.theme.disabledColor};
    border-color: ${props => props.theme.disabledColor};
    cursor: not-allowed;
    pointer-events: none;
  }
`;

export default Button;
