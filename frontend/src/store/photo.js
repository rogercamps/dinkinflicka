import { csrfFetch } from './csrf';
const ALL_PHOTOS = 'user/allPhotos'
const ADD_PHOTO = 'user/addPhoto'

const viewPhotos = (payload) => {
  return {
    type: ALL_PHOTOS,
    payload
  };
};

export const getAllPhotos = () => async (dispatch) => {
  const response = await fetch('/api/photos');
  if (response.ok) {
    const data = await response.json();
    const photos = data.photos
    dispatch(viewPhotos(photos))
  }
}

export const addPhoto = (payload) => { // change to addOnePhoto
  return {
    type: ADD_PHOTO,
    payload
  }
}

export const createPhoto = (photo) => async (dispatch) => {
  const response = await csrfFetch('/api/photos', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(photo)
  })

  if (response.ok) {
    const data = await response.json();
    console.log('add', data);
    dispatch(addPhoto(data.photo));
  }
}

const initialState = {}

const photoReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case ALL_PHOTOS:
      newState = {};
      action.payload.forEach(photo => (newState[photo.id] = photo));
      return newState;
    case ADD_PHOTO:
      newState = { ...state, [action.payload.id]: action.payload };
      return newState;
    default:
      return state;
  }
}

export default photoReducer;
