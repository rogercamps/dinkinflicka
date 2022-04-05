import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deletePhoto, getOnePhoto, updatePhoto } from '../../store/photo'
import './PhotoComponent.css'
import { useParams } from 'react-router-dom';


const PhotoDetail = () => {
  const dispatch = useDispatch();
  const { photoId } = useParams();
  const photo = useSelector(state => state.photo[photoId])
  console.log('-----------photo+++++++++++',photo);
  const handleDelete = (photoId) => {
    dispatch(deletePhoto(photoId));
  };

  // useEffect(() => {
  //   dispatch(getOnePhoto(photoId))
  // }, [dispatch, photoId])

  return (
    <div className="photo-detail">
      <span className="photo-title">{photo?.title}Test TExt</span>
      <img src={photo?.imageUrl} alt='' className='photo-detail-image'></img>
      <div>
        <button onClick={() => handleDelete(photoId)} className='delete-button'>
          Delete
        </button>
      </div>
    </div>
  )
}

export default PhotoDetail
