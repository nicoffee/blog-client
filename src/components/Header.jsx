// @flow

import * as React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const Header = () => (
  <StyledHeader>
    <h1>Blogspot</h1>
  </StyledHeader>
);

export default Header;
