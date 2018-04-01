// @flow

import * as React from 'react';
import Post from './Post';

type Props = {
  posts: Array<{ title: string, body: string, id: number }>,
  fetchPosts: Function
};

const PostsList = (props: Props) => (
  <div>
    <button onClick={() => props.fetchPosts()}>Fetch posts</button>
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
