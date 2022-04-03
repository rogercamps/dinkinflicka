import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllPhotos } from '../../store/photo'

const Photos = () => {
  const dispatch = useDispatch();
  const photos = useSelector(state => Object.values(state.photo));
  useEffect(() => {
    dispatch(getAllPhotos());
  }, [dispatch])
  return (
    <div>
      <div className='photos'>
        <ul>
          {photos?.map((photo) => (
            <li key={photo.id}>
              <img src={photo.imageUrl}></img>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
export default Photos
