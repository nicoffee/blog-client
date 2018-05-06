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

    &:checked + span:before {
      transform: translateX(18px);
      background-color: #000;
    }
  }
`;

const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 18px;
  background-color: #2196f3;
  transition: 0.4s;

  &:before {
    position: absolute;
    content: '';
    height: 14px;
    width: 14px;
    left: 4px;
    bottom: 3px;
    border-radius: 50%;
    background-color: white;
    transition: 0.4s;
  }
`;

const Switcher = props => (
  <StyledLabel>
    <input type="checkbox" onChange={props.onChange} />
    <Slider />
  </StyledLabel>
);

export default Switcher;
