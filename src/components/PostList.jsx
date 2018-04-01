// @flow

import * as React from "react";
import PostPreviw from "./PostPreview";

type Props = {
  posts: Array<{ title: string, body: string, id: number }>
};

const PostsList = (props: Props) => (
  <div>
    {props.posts.map(post => (
      <PostPreviw
        key={post.id}
        id={post.id}
        title={post.title}
        body={post.body}
        img="https://picsum.photos/600/300/?random"
      />
    ))}
  </div>
);

export default PostsList;
