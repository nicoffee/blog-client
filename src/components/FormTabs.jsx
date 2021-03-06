import React from 'react';
import styled, {css} from 'styled-components';

const Tabs = styled.div`
  display: flex;
  flex-direction: row;
`;

const Tab = styled.div`
  width: 50%;
  padding: ${props => props.theme.largePadding};
  background-color: ${props => props.theme.disabledColor};
  cursor: pointer;

  ${props =>
    props.active &&
    css`
      background-color: ${props => props.theme.headerBackgroundColor};
      color: ${props.theme.secondaryColor};
      font-weight: bold;
    `};

  text-align: center;
  transition: font-weight ${props => props.theme.basicAnimationPreset},
    color ${props => props.theme.basicAnimationPreset};
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
