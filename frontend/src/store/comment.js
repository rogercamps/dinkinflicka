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
    const photos = data.comments
    dispatch(viewComments(photos));
  }
}
