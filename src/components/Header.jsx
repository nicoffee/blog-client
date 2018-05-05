// @flow

import * as React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import UserBlock from './UserBlock';
import {Button} from './Styled';

const StyledHeader = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  position: fixed;
  background-color: #ffffff;
  opacity: 0.9;
  width: 100%;
  top: 0;
  left: 0;
`;

const StyledLogo = styled.div`
  grid-column: 2 / 3;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const StyledLink = styled.div`
  grid-column: 3 / 3;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding: 30px;
`;

type Props = {
  onSignInClick: Function,
  openModal: Function,
  user: string,
};

const Header = (props: Props) => (
  <StyledHeader>
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
