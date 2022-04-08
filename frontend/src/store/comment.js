import { csrfFetch } from './csrf';
const ALL_COMMENTS = 'user/allComments';
const ADD_COMMENT = 'user/addComment';
const REMOVE_COMMENT = 'user/removeComment';

const viewComments = (payload) => {
  return {
    type: ALL_COMMENTS,
    payload
  };
};

export const getAllComments = () => async (dispatch) => {
  const response = await csrfFetch('/api/comments');
  if (response.ok) {
    const data = await response.json();
    const comments = data.comments;
    dispatch(viewComments(comments));
  }
}

export const addComment = (payload) => {
  return {
    type: ADD_COMMENT,
    payload
  }
}

export const createComment = (payload) => async (dispatch) => {
  const response = await csrfFetch(`/api/comments/`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  })

  if (response.ok) {
    const data = await response.json();
    dispatch(addComment(data));
  }
}

const removeComment = (id) => {
  return {
    type: REMOVE_COMMENT,
    payload: id
  };
};

export const deleteComment = (id) => async (dispatch) => {
  const response = await csrfFetch(`/api/comments/${id}`, {
    method: 'DELETE'
  });
  if (response.ok) {
    dispatch(removeComment(id));
  }
};

// fetch('/api/comments', {
//   method: 'POST',
//   headers: {
//     "Content-Type": "application/json",
//     "XSRF-TOKEN": `BwQmyxpq-OUhMKQ-7B-aDY9vlWmXgnuJ3Um4`
//   },
// }).then(res => res.json()).then(data => console.log(data));



const initialState = {}

const commentReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case ALL_COMMENTS:
      newState = {};
      action.payload.forEach(comment => (newState[comment.id] = comment));
      return newState;
    case ADD_COMMENT:
      newState = { ...state, [action.payload.comment.id]: action.payload.comment };
      return newState;
    case REMOVE_COMMENT:
      newState = { ...state };
      console.log('reducer DELETE', action);
      delete newState[action.payload];
      return newState;
    default:
      return state;
  }
}

export default commentReducer;
