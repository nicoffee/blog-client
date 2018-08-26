// @flow

import styled from 'styled-components';

const ErrorMessage = styled.span`
  color: ${props => props.theme.errorColor};
  font-size: ${props => props.theme.xSmallFontSize};
`;

export default ErrorMessage;
