import React from 'react';
import styled, {css} from 'styled-components';

const Tabs = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const Tab = styled.div`
  cursor: pointer;

  ${props =>
    props.active &&
    css`
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
