import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deletePhoto, getOnePhoto, updatePhoto, getAllPhotos } from '../../store/photo'
import './PhotoComponent.css'
import { useParams, useHistory } from 'react-router-dom';
import UpdatePhoto from './UpdatePhoto';
import {Modal} from '../../context/Modal'

const PhotoDetail = () => {
  const dispatch = useDispatch();
  const { photoId } = useParams();
  const [showModal, setShowModal] = useState(false)
  const photo = useSelector(state => state.photo[photoId])
  let history = useHistory()
  const handleDelete = (photoId) => {
    dispatch(deletePhoto(photoId));
    history.push('/')
  };

  useEffect(() => {
    dispatch(getAllPhotos(photoId))
  }, [dispatch, photoId, photo]);

  return (
    <div className="photo-detail-div">
      <span className="photo-detail-title">{photo?.title}</span>
      <img src={photo?.imageUrl} alt='' className='photo-detail-image'></img>
      <div className='edit-title-modal'>
        <button onClick={() => setShowModal(true)}>Edit</button>
        {showModal && (
          <Modal onClose={() => setShowModal(false)}>
            <UpdatePhoto photo={photo} hideModal={() => setShowModal(false)} />
          </Modal>
        )}
      </div>
      <div>
        <button onClick={() => handleDelete(photoId)} className='photo-detail-delete-btn'>
          Delete
        </button>
      </div>
    </div>
  )
}

export default PhotoDetail;
