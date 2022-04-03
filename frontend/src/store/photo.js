const ALL_PHOTOS = 'user/allPhotos'

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

const photoReducer = (state = {}, action) => {
  let newState = {};
  switch (action.type) {
    case ALL_PHOTOS:
      action.payload.forEach(photo => (newState[photo.id] = photo));
      return newState;
    default:
      return state;
  }
}

export default photoReducer;
