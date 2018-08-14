// @flow

import * as React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import UserBlock from '../containers/UserBlock';
import Switcher from './Switcher';
import Button from './Button';
import Search from './Search';

const StyledHeader = styled.div`
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: ${props => props.theme.headerBackgroundColor};
  grid-template-columns: repeat(3, 1fr);
  opacity: 0.9;
  font-size: ${props => props.theme.smallFontSize};
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

const SearchBlock = styled.div`
  width: 60%;
`;

const ActionsBlock = styled.div`
  width: 40%;
  display: flex;
  flex-direction: flex-end;
  justify-content: flex-end;
`;

const Inner = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  max-width: 1040px;
  width: 100%;

  > div {
    display: flex;
    align-items: center;
    padding: 20px;
  }
`;

// const StyledInput = styled.input`
//   border: 1px solid
// `;

type Props = {
  onSignInClick: Function,
  openModal: Function,
  switchTheme: Function,
  user: string,
  theme: string,
};

const Header = (props: Props) => (
  <StyledHeader>
    <Inner>
      <StyledSwitcher>
        <Switcher
          defaultChecked={props.theme === 'dark'}
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
      <div>
        <SearchBlock>
          <Search
            onKeyPress={e => {
              if (e.key === 'Enter') {
                props.fetchPostsRequest({search: e.target.value});
              }
            }}
            type="text"
          />
        </SearchBlock>
        <ActionsBlock>
          {props.user ? (
            <UserBlock />
          ) : (
            <Button onClick={() => props.openModal()} fontSize="inherit">
              Sign in
            </Button>
          )}
        </ActionsBlock>
      </div>
    </Inner>
  </StyledHeader>
);

export default Header;
