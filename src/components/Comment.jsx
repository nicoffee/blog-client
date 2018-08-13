// @flow

import * as React from 'react';
import styled from 'styled-components';

export const StyledComment = styled.div`
  padding: 14px 18px;
  margin: 10px 0;
`;

type Props = {
  name: string,
  body: string,
};

const Comment = (props: Props) => (
  <StyledComment>
    <span>{props.name}</span>
    <p>{props.body}</p>
  </StyledComment>
);

export default Comment;
