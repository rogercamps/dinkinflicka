import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deletePhoto } from '../../store/photo'
import './PhotoComponent.css'

// const DeletePhoto = () => {
//   const dispatch = useDispatch();
//   const photos = useSelector(state => Object.values(state.photo));
//   useEffect(() => {
//     dispatch(getAllPhotos());
//   }, [dispatch])
const PhotoDetail = ({ id, userId, imageUrl, title }) => {
  const dispatch = useDispatch();
  const photos = useSelector(state => Object.values(state.photo))

  const handleDelete = (id) => {
    dispatch(deletePhoto(id));
  };

  return (
    <div className="photo-deta">
      <span className="photo-title">{photos.title}</span>
      <img src={photos.imageUrl} alt=''></img>
      <div>
        <button onClick={() => handleDelete(id)} className='delete-button'>
          Delete
        </button>
      </div>
    </div>
  )
}


export default PhotoDetail
