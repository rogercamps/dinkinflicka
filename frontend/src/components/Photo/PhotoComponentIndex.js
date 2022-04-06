import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllPhotos } from '../../store/photo'
import './PhotoComponent.css'
import { Route, NavLink } from 'react-router-dom'

const PhotoComponentIndex = () => {
  const dispatch = useDispatch();
  const photos = useSelector(state => Object.values(state.photo));
  useEffect(() => {
    dispatch(getAllPhotos());
  }, [dispatch])

  return (
    <main>
      <nav className="photo-index-nav">
        {photos?.map(photo => {
          return (
            <NavLink key={photo?.id} to={`/photos/${photo.id}`} className="photo-index-navlink">
              {photo?.title}
              <img src={photo?.imageUrl} className='photo-index-img' alt=''></img>
            </NavLink>
          )
        })}
      </nav>
    </main>
  )
}
export default PhotoComponentIndex
