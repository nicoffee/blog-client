// @flow

import * as React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import UserBlock from '../containers/UserBlock';
import Switcher from '../ui/Switcher';
import Button from '../ui/Button';
import Loader from '../ui/Loader';
import Search from './Search';

const StyledHeader = styled.div`
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  display: flex;
  width: 100%;
  justify-content: center;
  background-color: ${props => props.theme.headerBackgroundColor};
  font-size: ${props => props.theme.smallFontSize};
  grid-template-columns: repeat(3, 1fr);
  opacity: 0.9;
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

const StyledActions = styled.div`
  justify-content: space-between;
`;

const Inner = styled.div`
  display: grid;
  width: 100%;
  max-width: 1040px;
  grid-template-columns: repeat(3, 1fr);

  > div {
    display: flex;
    align-items: center;
    padding: 20px;
  }
`;

type Props = {
  onSignInClick: Function,
  openModal: Function,
  switchTheme: Function,
  fetchPostsRequest: Function,
  user: string,
  theme: string,
  isFetching: boolean,
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
      <StyledActions>
        <SearchBlock>
          <Search
            onKeyPress={e => {
              if (e.key === 'Enter' && e.target.value) {
                props.fetchPostsRequest({search: e.target.value});
              }
            }}
            type="text"
          />
        </SearchBlock>
        {props.isFetching ? (
          <Loader size="small" />
        ) : props.user ? (
          <UserBlock />
        ) : (
          <Button fontSize="inherit" onClick={() => props.openModal('auth')}>
            Sign in
          </Button>
        )}
      </StyledActions>
    </Inner>
  </StyledHeader>
);

export default Header;
