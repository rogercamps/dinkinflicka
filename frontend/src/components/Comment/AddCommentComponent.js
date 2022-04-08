import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { createComment } from "../../store/comment"
import './CommentComponent.css'

const AddComment = ({imageId}) => {
  const dispatch = useDispatch();
  const [comment, setComment] = useState('');
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [validationErrors, setValidationErrors] = useState([]);

  useEffect(() => {
    const errors = [];
    if (comment.length > 25) errors.push('Comment should be 1000 characters or less');
    if (comment.length === 0) errors.push("Comment can't be blank");
  }, [comment]);

  const handleSubmit = (e) => {
    e.preventDefault()

    setHasSubmitted(true);
    if (validationErrors.length) return alert(`Cannot Submit`);

    const payload = {
      comment,
      imageId
    };

    dispatch(createComment(payload));
    reset();
    setHasSubmitted(false);
    setValidationErrors([]);
  };

  const reset = () => {
    setComment("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <ul>
        {hasSubmitted && validationErrors.length > 0 && (
          <div>
            <ul>
              {validationErrors.map((error, idx) => <li key={idx}>{error}</li>)}
            </ul>
          </div>
        )}
      </ul>
      <label>
        Comments
        <input
          type="text"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        // required
        />
      </label>
    </form>
  )
}

export default AddComment;
