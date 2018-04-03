// @flow

import * as React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledComment = styled.div`
  border-radius: 3px;
  padding: 0.25em 1em;
  margin: 0 1em;
  background: transparent;
  color: palevioletred;
  border: 2px solid palevioletred;
`;

type Props = {
  name: string,
  body: string
};

const Comment = (props: Props) => (
  <StyledComment>
    <span>{props.name}</span>
    <p>{props.body}</p>
  </StyledComment>
);

export default Comment;
