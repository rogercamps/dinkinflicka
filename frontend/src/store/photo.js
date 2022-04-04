import { csrfFetch } from './csrf';
const ALL_PHOTOS = 'user/allPhotos'
const ADD_PHOTO = 'user/addPhoto'
const REMOVE_PHOTO = 'user/removePhoto'

const viewPhotos = (payload) => {
  return {
    type: ALL_PHOTOS,
    payload
  };
};

export const addPhoto = (payload) => { // change to addOnePhoto
  return {
    type: ADD_PHOTO,
    payload
  }
}

const removePhoto = (id) => {
  return {
    type: REMOVE_PHOTO,
    payload: id };
};

export const getAllPhotos = () => async (dispatch) => {
  const response = await fetch('/api/photos');
  if (response.ok) {
    const data = await response.json();
    const photos = data.photos
    dispatch(viewPhotos(photos))
  }
}


export const createPhoto = (payload) => async (dispatch) => {
  const response = await csrfFetch('/api/photos', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  })

  if (response.ok) {
    const data = await response.json();
    console.log('add', data);
    dispatch(addPhoto(data.photo));
  }
}

export const deletePhoto = (id) => async (dispatch) => {
  const response = await fetch(`/api/photos/${id}`, {
    method: 'DELETE'
  });

  if (response.ok) {
    dispatch(removePhoto(id));
  }
};

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
    case REMOVE_PHOTO:
      newState = { ...state };
      delete newState[action.payload];
      return newState;
    default:
      return state;
  }
}

export default photoReducer;
