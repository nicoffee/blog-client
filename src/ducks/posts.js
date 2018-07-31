// Actions
const FETCH_STARTED = 'blog/posts/FETCH_STARTED';
const FETCH_SUCCESS = 'blog/posts/FETCH_SUCCESS';
const FETCH_FAILURE = 'blog/posts/FETCH_FAILURE';

// Reducer
export default function reducer(state = {}, action = {}) {
  switch (action.type) {
    // do reducer stuff
    default:
      return state;
  }
}

// export function fetchPosts() {
//   return {type: FETCH_STARTED};
// }

// export function createWidget(widget) {
//   return {type: CREATE, widget};
// }

// export function updateWidget(widget) {
//   return {type: UPDATE, widget};
// }

// export function removeWidget(widget) {
//   return {type: REMOVE, widget};
// }

// Action Creators
export const fetchPostsRequest = params => ({
  type: FETCH_STARTED,
  payload: params,
});

export const fetchPostsSuccess = data => ({
  type: FETCH_SUCCESS,
  payload: data,
});

export const fetchPostsError = error => ({
  type: FETCH_FAILURE,
  payload: error.message,
});

// sagas
export function* fetchPostsSaga(action) {
  try {
    const posts = yield call(api.fetchPosts, action.payload);
    yield put(actions.fetchPostsSuccess(posts.data));
  } catch (error) {
    yield put(actions.fetchPostsError(error));
  }
}

// side effects, only as applicable
// e.g. thunks, epics, etc
// export function getWidget() {
//   return dispatch =>
//     get('/widget').then(widget => dispatch(updateWidget(widget)));
// }

export function getPosts(params) {
  return axios.get(`${realApiUrl}/posts`, {params});
}
