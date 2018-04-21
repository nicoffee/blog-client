import {combineReducers} from 'redux';
import createList, * as fromList from './createList';
import byId, * as fromById from './byId';

export const getPosts = state => {
  const ids = fromList.getIds(state.ids);
  return ids.map(id => fromById.getPost(state.byId[id], id));
};

export const getIsFetching = state => fromList.getIsFetching(state);

export default combineReducers({ids: createList(), byId});
