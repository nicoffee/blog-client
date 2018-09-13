// @flow

import * as React from 'react';
import styled, {css} from 'styled-components';

type Props = {
  active?: boolean,
  color?: string,
  danger?: boolean,
  onClick?: Function,
  children: React.Node,
};

const Rounded = styled.button`
  display: flex;
  width: 40px;
  height: 40px;
  align-items: center;
  justify-content: center;
  border: 0.1px solid ${({theme}) => theme.buttonRoundedBorderColor};
  border-radius: 50%;

  /* prettier-ignore */
  box-shadow:
    0 3px 2px -1px rgba(0, 0, 0, 0.2),
    0 6px 5px 0 rgba(0, 0, 0, 0.14),
    0 1px 9px 0 rgba(0, 0, 0, 0.12);
  cursor: pointer;

  svg {
    width: 16px;
    height: 16px;
    fill: ${props => props.theme.buttonRoundedBorderColor};
    stroke: ${props => props.theme.buttonRoundedBorderColor};
  }

  ${props =>
    props.danger &&
    css`
      background-color: ${props.theme.buttonDangerBgColor};
      border-color: ${props.theme.buttonDangerBgColor};

      /* stylelint-disable */
      svg {
        fill: ${props => props.theme.buttonsBgColor};
        stroke: ${props => props.theme.buttonsBgColor};
      }
      /* stylelint-enable */
    `};

  transition: box-shadow ${props => props.theme.basicAnimationPreset},
    border-color ${props => props.theme.basicAnimationPreset};

  &:hover {
    border-color: ${props => props.theme.colors[props.color]};

    /* prettier-ignore */
    box-shadow:
      0 3px 5px -1px rgba(0, 0, 0, 0.2),
      0 6px 10px 0 rgba(0, 0, 0, 0.14),
      0 1px 18px 0 rgba(0, 0, 0, 0.12);

    svg {
      width: 16px;
      height: 16px;
      fill: ${props => props.theme.colors[props.color]};
      stroke: ${props => props.theme.colors[props.color]};
    }
  }

  &:focus {
    outline: none;
  }
`;

const RoundedButton = (props: Props) => {
  const {color, danger, onClick, children} = props;

  return (
    <Rounded color={color} danger={danger} onClick={onClick}>
      {children}
    </Rounded>
  );
};

export default RoundedButton;
