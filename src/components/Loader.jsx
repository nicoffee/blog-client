// @flow

import styled, {keyframes} from 'styled-components';

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
  border: 6px solid ${props => props.theme.disabledColor};
  border-top: 6px solid ${props => props.theme.secondaryColor};
  margin-bottom: -20px;
  animation: ${rotate360} 2s linear infinite;
  border-radius: 50%;
`;

export default Loader;
