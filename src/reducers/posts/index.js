import {combineReducers} from 'redux';
import createList, * as fromList from './createList';
import byId, * as fromById from './byId';

export const getPosts = state => {
  const ids = fromList.getIds(state.posts.all);
  return ids.map(id => fromById.getPost(state.posts.byId[id], id));
};
export const getIsFetching = state => fromList.getIsFetching(state.posts.all);
export const getErrorMessage = state =>
  fromList.getErrorMessage(state.posts.all);

export default combineReducers({all: createList(), byId});
