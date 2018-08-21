// @flow

import * as React from 'react';
import styled, {css} from 'styled-components';

const Rounded = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 0.1px solid ${props => props.theme.buttonRoundedBorderColor};
  height: 40px;
  width: 40px;
  box-shadow: 0px 3px 2px -1px rgba(0, 0, 0, 0.2),
    0px 6px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 9px 0px rgba(0, 0, 0, 0.12);
  cursor: pointer;
  transition: box-shadow ${props => props.theme.basicAnimationPreset},
    border-color ${props => props.theme.basicAnimationPreset};

  &:hover {
    border-color: ${props => props.theme.colors[props.color]};
    box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2),
      0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12);

    svg {
      width: 16px;
      height: 16px;
      stroke: ${props => props.theme.colors[props.color]};
      fill: ${props => props.theme.colors[props.color]};
    }
  }

  svg {
    width: 16px;
    height: 16px;
    stroke: ${props => props.theme.buttonRoundedBorderColor};
    fill: ${props => props.theme.buttonRoundedBorderColor};
  }

  ${props =>
    props.danger &&
    css`
      background-color: ${props.theme.buttonDangerBgColor};
      border-color: ${props.theme.buttonDangerBgColor};

      svg {
        stroke: ${props => props.theme.buttonsBgColor};
        fill: ${props => props.theme.buttonsBgColor};
      }
    `};
`;

const RoundedButton = ({active, color, danger, onClick, children}) => (
  <Rounded color={color} danger={danger} onClick={onClick}>
    {React.cloneElement(children, {active})}
  </Rounded>
);

export default RoundedButton;
