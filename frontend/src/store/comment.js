import { csrfFetch } from './csrf';

const ALL_COMMENTS = 'user/allComments';


const viewComments = (payload) => {
  return {
    type: ALL_COMMENTS,
    payload
  };
};

export const getAllComments = () => async (dispatch) => {
  const response = await fetch('/api/comments');
  if (response.ok) {
    const data = await response.json();
    const comments = data.comments
    dispatch(viewComments(comments));
  }
}

const initialState = {}

const commentReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case ALL_COMMENTS:
      newState = {};
      action.payload.forEach(comment => (newState[comment.id] = comment));
      return newState;
    default:
      return state;
  }
}

export default commentReducer;
