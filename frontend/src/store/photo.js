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
    console.log('+++++++++++++++++>>>>>>>>>>>>: photo.js -> getAllPhotos', data);
    dispatch(viewPhotos(photos))
  }
}

export const addPhoto = (payload) => {
  return {
    type: ADD_PHOTO,
    payload
  }
}

const photoReducer = (state = {}, action) => {
  let newState = {};
  switch (action.type) {
    case ALL_PHOTOS:
      action.payload.forEach(photo => (newState[photo.id] = photo));
      return newState;
    case ADD_PHOTO:
      newState = { ...state, [newState.payload.id]: action.payload};
      return newState;
    default:
      return state;
  }
}


export default photoReducer;
