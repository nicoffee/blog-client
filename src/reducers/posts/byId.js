const byId = (state = {}, action) => {
  if (action.payload && action.payload.entities) {
    return {
      ...state,
      ...action.payload.entities.posts,
    };
  }

  return state;
};

export default byId;

export const getPost = state => state;
