// @flow

import * as React from "react";
import Button from "./Button";

type Props = {
  title: string,
  img: string,
  body: string
};

const Post = (props: Props) => (
  <div>
    <h1>{props.title}</h1>
    <img src={props.img} />
    <p>{props.body}</p>
    <Button primary>Read</Button>
    <Button>Support</Button>
  </div>
);

export default Post;
