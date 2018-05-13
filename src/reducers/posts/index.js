import {combineReducers} from 'redux';
import createList, * as fromList from './createList';
import byId, * as fromById from './byId';
import {sortPostsByDate} from '../../utils/helpers';

export const getPosts = state => {
  const ids = fromList.getIds(state.posts.all);
  const posts = ids.map(id => fromById.getPost(state.posts.byId[id], id));
  return sortPostsByDate(posts);
};
export const getIsFetching = state => fromList.getIsFetching(state.posts.all);
export const getErrorMessage = state =>
  fromList.getErrorMessage(state.posts.all);

export default combineReducers({all: createList(), byId});
