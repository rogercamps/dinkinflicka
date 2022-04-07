import { Route, NavLink, useParams } from 'react-router-dom'
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllComments } from '../../store/comment'
import './CommentComponent.css'

const CommentComponentIndex = () => {
  const dispatch = useDispatch();
  const { photoId } = useParams()
  const comments = useSelector(state => Object.values(state.comment));

  useEffect(() => {
    dispatch(getAllComments());
  }, [dispatch])

  return (
    <main>
      <nav className="comment-index-nav">
        {comments.filter(comment => comment.imageId === +photoId).map(comment =>
          <div key={comment?.id} className="comment-index-div">
            {comment?.comment}
          </div>
        )}
      </nav>
    </main>
  )
}

export default CommentComponentIndex;
