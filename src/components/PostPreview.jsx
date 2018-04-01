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

const PostPreviw = (props: Props) => (
  <StyledPost>
    <Link to={`/${props.id}`}>
      <h1>{props.title}</h1>
    </Link>
    <img src={props.img} />
    <p>{props.body}</p>
    <Button primary>Read</Button>
    <Button>Support</Button>
  </StyledPost>
);

export default PostPreviw;
