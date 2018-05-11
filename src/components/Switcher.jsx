import * as React from 'react';
import styled from 'styled-components';

const StyledLabel = styled.label`
  position: relative;
  display: inline-block;
  width: 40px;
  height: 20px;

  input {
    display: none;

    &:checked + span {
      background-color: #fdd835;
    }

    &:checked + span::before {
      background-color: #000;
      transform: translateX(18px);
    }
  }
`;

const Slider = styled.span`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: #2196f3;
  border-radius: 18px;
  cursor: pointer;
  transition: 0.4s;

  &::before {
    position: absolute;
    bottom: 3px;
    left: 4px;
    width: 14px;
    height: 14px;
    background-color: white;
    border-radius: 50%;
    content: '';
    transition: 0.4s;
  }
`;

const Switcher = props => (
  <StyledLabel>
    <input
      onChange={props.onChange}
      type="checkbox" />
    <Slider />
  </StyledLabel>
);

export default Switcher;
