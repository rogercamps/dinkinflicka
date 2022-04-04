import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllPhotos } from '../../store/photo'
import './PhotoComponent.css'

const DeletePhoto = () => {
  const dispatch = useDispatch();
  const photos = useSelector(state => Object.values(state.photo));
  useEffect(() => {
    dispatch(getAllPhotos());
  }, [dispatch])

  return(
    <div>
      <button type="submit">Delete photo</button>
    </div>
  )
}


export default DeletePhoto
