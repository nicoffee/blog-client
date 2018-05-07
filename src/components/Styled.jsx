// @flow

import styled, {css} from 'styled-components';

export const Input = styled.input`
  width: 100%;
  padding: 15px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  font-size: 18px;
  font-weight: 100;
`;

export const StyledFormGroup = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 30px;

  label {
    width: 30%;
  }

  div {
    display: flex;
    width: 70%;
  }
`;

export const Button = styled.button`
  padding: 8px 16px;
  border: 1px solid #28abe3;
  margin: 0 1em;
  border-radius: 3px;
  color: ${props => props.theme.color};
  cursor: pointer;
  font-size: 12px;

  ${props =>
    props.primary &&
    css`
      background: #28abe3;
      color: ${props.theme.color};
    `};

  transition: background-color 0.2s, color 0.2s;

  &:hover {
    background-color: #28abe3;
    color: #fff;
  }
`;
