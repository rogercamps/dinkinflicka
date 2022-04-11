import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllComments, deleteComment } from '../../store/comment'
import './CommentComponent.css'

const CommentComponentIndex = () => {
  const dispatch = useDispatch();
  const { photoId, commentId } = useParams()
  const comments = useSelector(state => Object.values(state.comment));
  const [comment, setComment] = useState("");
  const [validationErrors, setValidationErrors] = useState([]);

  const handleDelete = (photoId) => {
    dispatch(deleteComment(photoId));
  };

  useEffect(() => {
    const errors = [];
    if (comment.length > 100) errors.push('Comments should be 100 characters long or less')
    if (comment.length < 2) errors.push("Comments should be at least 2 characters long")
    setValidationErrors(errors)
    dispatch(getAllComments());
  }, [dispatch, comment])



  const sessionUser = useSelector(state => state.session.user)

  return (
    <main>
      <nav className="comment-index-nav">
        {comments.filter(comment => comment.imageId === +photoId).map(comment =>
          <div key={comment?.id} className="comment-index-div">
              <span>{comment?.User.username} said:</span>
            <div className="comment-body">
              {comment?.comment}
            </div>
            {sessionUser && sessionUser?.id === comment?.userId && (
              <button onClick={() => handleDelete(comment?.id)} className='photo-detail-delete-btn'>
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
