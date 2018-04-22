import {schema} from 'normalizr';

const postSchema = new schema.Entity('posts');

export const postListSchema = new schema.Array(postSchema);
