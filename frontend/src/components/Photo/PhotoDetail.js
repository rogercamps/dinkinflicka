import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deletePhoto, getOnePhoto, updatePhoto, getAllPhotos } from '../../store/photo'
import './PhotoComponent.css'
import { useParams } from 'react-router-dom';


const PhotoDetail = () => {
  const dispatch = useDispatch();
  const { photoId } = useParams();
  const photo = useSelector(state => state.photo[photoId])
  const handleDelete = (photoId) => {
    dispatch(deletePhoto(photoId));
  };

  useEffect(() => {
    dispatch(getAllPhotos(photoId))
  }, [dispatch, photoId])

  return (
    <div className="photo-detail-div">
      <span className="photo-detail-title">{photo?.title}</span>
      <img src={photo?.imageUrl} alt='' className='photo-detail-image'></img>
      <div>
        <button onClick={() => handleDelete(photoId)} className='photo-detail-delete-btn'>
          Delete
        </button>
      </div>
    </div>
  )
}

export default PhotoDetail
