import React from 'react';
import styled, {css} from 'styled-components';

const Tabs = styled.div`
  display: flex;
  flex-direction: row;
`;

const Tab = styled.div`
  cursor: pointer;
  padding: 30px 40px;
  width: 50%;
  text-align: center;
  background-color: ${props => props.theme.disabledColor};

  ${props =>
    props.active &&
    css`
      background-color: ${props => props.theme.headerBackgroundColor};
      color: ${props.theme.secondaryColor};
      font-weight: bold;
    `};

  transition: font-weight 200ms, color 200ms;
`;

const FormTabs = props => (
  <Tabs>
    <Tab active={props.activeForm === 'signup'} onClick={props.onSignUpClick}>
      Sign Up
    </Tab>
    <Tab active={props.activeForm === 'signin'} onClick={props.onSignInClick}>
      Sign In
    </Tab>
  </Tabs>
);

export default FormTabs;
