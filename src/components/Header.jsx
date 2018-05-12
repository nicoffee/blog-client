// @flow

import * as React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import UserBlock from './UserBlock';
import Switcher from './Switcher';
import {Button} from './Styled';

const StyledHeader = styled.div`
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  display: grid;
  width: 100%;
  background-color: ${props => props.theme.headerBackgroundColor};
  grid-template-columns: repeat(3, 1fr);
  opacity: 0.9;

  > div {
    display: flex;
    align-items: center;
    padding: 20px;
  }
`;

const StyledSwitcher = styled.div`
  justify-content: flex-start;

  label {
    margin-right: 8px;
  }
`;

const StyledLogo = styled.div`
  justify-content: center;

  h1 {
    margin: 0;
  }
`;

const StyledLink = styled.div`
  justify-content: flex-end;
`;

type Props = {
  onSignInClick: Function,
  openModal: Function,
  switchTheme: Function,
  user: string,
  theme: string,
};

const Header = (props: Props) => (
  <StyledHeader>
    <StyledSwitcher>
      <Switcher
        onChange={() =>
          props.switchTheme(props.theme === 'dark' ? 'light' : 'dark')
        }
      />
      {props.theme === 'dark' ? (
        <span>Switch to light theme</span>
      ) : (
        <span>Switch to night theme</span>
      )}
    </StyledSwitcher>
    <StyledLogo>
      <Link to="/">
        <h1>Blog</h1>
      </Link>
    </StyledLogo>
    <StyledLink>
      {props.user ? (
        <UserBlock />
      ) : (
        <Button onClick={() => props.openModal()}>Sign in</Button>
      )}
    </StyledLink>
  </StyledHeader>
);

export default Header;
