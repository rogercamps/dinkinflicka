import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { editPhoto, getAllPhotos } from '../../store/photo'


function UpdatePhoto({ photo, hideModal }) {
  const dispatch = useDispatch();
  const { photoId } = useParams();
  const [title, setTitle] = useState(photo.title);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [validationErrors, setValidationErrors] = useState([]);
  const [showErrors, setShowErrors] = useState(false);
  // const [errors, setErrors] = useState([]);


  useEffect(() => {
    const errors = [];
    if (title.length > 25) errors.push('Title should be 25 characters or less')
    if (title.length < 1) errors.push("Title can't be blank")
    setValidationErrors(errors)
  }, [title])

  const handleSubmit = async (e) => {
    e.preventDefault();
    setShowErrors(true);

    if (validationErrors.length) {
      return setHasSubmitted(true);
    }

    const payload = {
      ...photo,
      title
    };

    await dispatch(editPhoto(payload));
    setValidationErrors([]);
    setShowErrors(false);
    hideModal()
  };

  // useEffect(() => {
  //   dispatch(getAllPhotos(photoId))
  // }, [dispatch, photoId]);

  const handleUpdateClick = (e) => {
    e.preventDefault()
    hideModal()
  };

  return (
    <form onSubmit={handleSubmit}>
      <ul>
        {validationErrors.map((error) => <li key={error}>{error}</li>)}
      </ul>
      <div className="update-title">
        <label>
          Title:
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </label>
        <button type="submit">Edit Title</button>
        <button type="button" onClick={handleUpdateClick}>Cancel</button>
      </div>
    </form>
  );
}

export default UpdatePhoto;
