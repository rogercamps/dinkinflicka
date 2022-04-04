import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllPhotos } from '../../store/photo'
import DeletePhoto from './PhotoDetail';
import './PhotoComponent.css'

const Photos = () => {
  const dispatch = useDispatch();
  const photos = useSelector(state => Object.values(state.photo));
  useEffect(() => {
    dispatch(getAllPhotos());
  }, [dispatch])
  return (
    <div>
      <div className='photos'>
        <ul className='photo-ul'>
          {photos?.map((photo) => (
            <li key={photo.id} className='photo-li'>
              <span className='photo-title'>{photo.title}</span>
              <img src={photo.imageUrl} className='photo-img'></img>
              <DeletePhoto />
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
export default Photos
