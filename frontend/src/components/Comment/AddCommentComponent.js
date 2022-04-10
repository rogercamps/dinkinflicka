import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { createComment } from "../../store/comment"
import './CommentComponent.css'

const AddComment = ({ imageId }) => {
  const dispatch = useDispatch();
  const [comment, setComment] = useState('');
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [validationErrors, setValidationErrors] = useState([]);
  const [showErrors, setShowErrors] = useState(false);

  useEffect(() => {
    const errors = [];
    if (comment.length > 25) errors.push('Comment should be 1000 characters or less');
    if (comment.length < 2) errors.push("Comment must be 2 characters or more");
    setValidationErrors(errors)
  }, [comment]);

  useEffect(() => {
    if (!showErrors) return;
    const closeErrors = () => {
      setShowErrors(false);
    };
    window.addEventListener('click', closeErrors)
    reset();
    return () => window.removeEventListener("click", closeErrors);
  }, [showErrors]);

  const handleSubmit = (e) => {
    e.preventDefault()
    setShowErrors(true);

    if (validationErrors.length) {
      return setHasSubmitted(true);
    }

    const payload = {
      comment,
      imageId
    };

    dispatch(createComment(payload));
    reset();
    setHasSubmitted(false);
    setValidationErrors([]);
    setShowErrors(false);
  };

  const reset = () => {
    setComment("");
  };

  // useEffect(() => {
  //   setShowErrors([]);
  // }, [comment])

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
          // onBlur={(e) => setShowErrors(false)}
          // onBlur={(e) => {
            // if (e.currentTarget === e.target) {
              // setComment('')
              // setShowErrors(false)
            // } else {
            //   console.log('unfocused child', e.target);
            // }
            // if (!e.currentTarget.contains(e.relatedTarget)) {
            //   // Not triggered when swapping focus between children
            //   console.log('out of comment box');
            //   setValidationErrors([])
            // }
          // }}

        // required
        />
      </label>
    </form>
  )
}




export default AddComment;
