import { csrfFetch } from './csrf';
const SINGLE_PHOTO = 'photo/photoId'
const ALL_PHOTOS = 'user/allPhotos'
const ADD_PHOTO = 'user/addPhoto'
const UPDATE_PHOTO = 'user/updatePhoto'
const REMOVE_PHOTO = 'user/removePhoto'

const singlePhoto = (payload) => {
  return {
    type: SINGLE_PHOTO,
    payload
  }
}

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

const updatePhoto = (payload) => {
  return {
    type: UPDATE_PHOTO,
    payload
  }
}

const removePhoto = (id) => {
  return {
    type: REMOVE_PHOTO,
    payload: id
  };
};

export const getOnePhoto = (id) => async (dispatch) => {
  const response = await csrfFetch(`/api/${id}`, {
    method: 'GET'
  })
  if (response.ok) {
    dispatch(singlePhoto(id))
  }
}

export const getAllPhotos = () => async (dispatch) => {
  const response = await fetch('/api/photos');
  if (response.ok) {
    const data = await response.json();
    const photos = data.images
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
    dispatch(addPhoto(data.image));
  }
}

export const editPhoto = (payload) => async (dispatch) => {
  const response = await csrfFetch(`/api/photos/${payload.id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  })
  if (response.ok) {
    const data = await response.json();
    const updatedPhoto = data.image.title;
    dispatch(updatePhoto(updatedPhoto))
  }
}

export const deletePhoto = (id) => async (dispatch) => {
  const response = await csrfFetch(`/api/photos/${id}`, {
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
      console.log(action.payload)
      newState = { ...state, [action.payload.id]: action.payload };
      return newState;
    case UPDATE_PHOTO:
      return { ...state, [action.payload.id]: action.payload}
      // return { ...state, [action.payload.id]: {...state[action.payload], ...action.payload} }
    case SINGLE_PHOTO:
      return {...state, [action.payload.id]: action.payload}
    case REMOVE_PHOTO:
      newState = { ...state };
      delete newState[action.payload];
      return newState;
    default:
      return state;
  }
}

export default photoReducer;
