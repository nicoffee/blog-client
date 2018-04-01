// @flow

import * as React from 'react';
import Post from './Post';

type Props = {
  posts: Array<{ title: string, body: string, id: number }>
};

const PostsList = (props: Props) => (
  <div>
    {props.posts.map(post => (
      <Post
        key={post.id}
        title={post.title}
        body={post.body}
        img="https://picsum.photos/600/300/?random"
      />
    ))}
  </div>
);

export default PostsList;
