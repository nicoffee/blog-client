// @flow

import styled, { keyframes } from "styled-components";

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Loader = styled.div`
  position: absolute;
  top: 50%;
  width: 40px;
  height: 40px;
  margin-bottom: -20px;
  border: 6px solid #f3f3f3;
  border-top: 6px solid #3498db;
  border-radius: 50%;
  animation: ${rotate360} 2s linear infinite;
`;

export default Loader;
