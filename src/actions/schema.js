import {schema} from 'normalizr';

const postSchema = new schema.Entity('posts', {}, {idAttribute: '_id'});

export const postListSchema = new schema.Array(postSchema);
