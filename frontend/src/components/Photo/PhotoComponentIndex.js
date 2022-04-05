import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllPhotos } from '../../store/photo'
import './PhotoComponent.css'
import { Route, NavLink } from 'react-router-dom'

const PhotoComponentIndex = () => {
  const dispatch = useDispatch();
  const photos = useSelector(state => Object.values(state.photo));
  console.log(photos);
  useEffect(() => {
    dispatch(getAllPhotos());
  }, [dispatch])

  return (
    <main>
      <nav>
        {photos?.map(photo => {
          return (
            <NavLink key={photo?.id} to={`/photos/${photo.id}`}>
              {photo?.title}
              <img src={photo?.imageUrl} className='photo-img' alt=''></img>
            </NavLink>
          )
        })}
      </nav>
    </main>
  )
}
export default PhotoComponentIndex


//<div>
  //    <div className='photos'>
    //    <ul className='photo-ul'>
      //    {photos?.map((photo) => (
            // <div onClick={(e) => window.location.href=`/photos/${photo.id}`} key={photo.id}>
 //           <Link to={`/photos/${photo.id}`} key={photo.id} >
   //           <li className='photo-li'>
     //           <span className='photo-title'>{photo.title}</span>
       //         <img src={photo.imageUrl} className='photo-img' alt=''></img>
         //       <Route path={`/photo/${photo.id}`}>
           //       <PhotoDetail id={photo.id} />
             //   </Route>
//              </li>
  //          </Link>
    //        // </div>
      //    ))}
        //</ul>
//      </div>
  //  </div>
