import { useParams } from 'react-router-dom'
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllComments, deleteComment } from '../../store/comment'
import './CommentComponent.css'

const CommentComponentIndex = () => {
  const dispatch = useDispatch();
  const { photoId, commentId } = useParams()
  const comments = useSelector(state => Object.values(state.comment));
  const comment = useSelector(state => state.photo[commentId])

  const handleDelete = (photoId) => {
    dispatch(deleteComment(photoId));
  };

  useEffect(() => {
    dispatch(getAllComments());
  }, [dispatch])

  // useEffect(() => {
  //   dispatch(getAllComments(commentId))
  // }, [dispatch, commentId]);

  const sessionUser = useSelector(state => state.session.user)

  return (
    <main>
      <nav className="comment-index-nav">
        {comments.filter(comment => comment.imageId === +photoId).map(comment =>
          <div key={comment?.id} className="comment-index-div">
            {comment?.comment}
            {sessionUser && sessionUser?.id === comment?.userId && (
              <button onClick={() => handleDelete(comment?.id)} className='comment-delete-btn'>
                Delete
              </button>
            )}
          </div>
        )}
      </nav>
    </main>
  )
}

export default CommentComponentIndex;


// import { useParams } from 'react-router-dom'
// import { useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { getAllComments, deleteComment } from '../../store/comment'
// import './CommentComponent.css'

// const CommentComponentIndex = () => {
//   const dispatch = useDispatch();
//   const { photoId } = useParams()
//   const comments = useSelector(state => Object.values(state.comment));

//   const handleDelete = (photoId) => {
//     dispatch(deleteComment(photoId));
//   };

//   useEffect(() => {
//     dispatch(getAllComments());
//   }, [dispatch])

//   return (
//     <main>
//       <nav className="comment-index-nav">
//         {comments.filter(comment => comment.imageId === +photoId).map(comment =>
//           <div key={comment?.id} className="comment-index-div">
//             {comment?.comment}
//             <button onClick={() => handleDelete(comment?.id)} className='comment-delete-btn'>
//               Delete
//             </button>
//           </div>
//         )}
//       </nav>
//     </main>
//   )
// }

// export default CommentComponentIndex;
