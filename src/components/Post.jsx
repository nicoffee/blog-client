// @flow

import * as React from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import Button from "./Button";

const StyledPost = styled.div`
  border-radius: 3px;
  padding: 0.25em 1em;
  margin: 0 1em;
  background: transparent;
  color: palevioletred;
  border: 2px solid palevioletred;
`;

type Props = {
  id: number,
  title: string,
  img: string,
  body: string
};

const Post = (props: Props) => {
  console.log("props", props);
  return (
    <StyledPost>
      <h1>{props.title}</h1>
      <p>{props.body}</p>
      <Link to={`${props.id}/edit`}>Edit</Link>
    </StyledPost>
  );
};

export default Post;
