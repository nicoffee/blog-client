import * as React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const StyledError = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledImg = styled.img`
  width: 300px;
  height: 400px;
`;

const Error = props => (
  <StyledError>
    <h1>{props.errorMessage}</h1>
    <StyledImg src="https://78.media.tumblr.com/93eca4fa0a39eb9ce946eb65087fd123/tumblr_o8fv8exunr1usi9s5o1_1280.png" />
    <Link to="/">Back to main page</Link>
  </StyledError>
);

export default Error;
