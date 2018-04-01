// @flow

import * as React from 'react';

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
    </div>
);

export default Post;
