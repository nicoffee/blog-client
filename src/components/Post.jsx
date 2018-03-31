// @flow

import * as React from 'react';

// type Props = {
//   title: string,
//   body: string
// };

const Post = ({ title: string, body: string }) => (
    <div>
      <h1>{props.title}</h1>
      <img src={props.img} />
      <p>{props.body}</p>
    </div>
);

export default Post;
