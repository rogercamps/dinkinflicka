import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { createPhoto } from "../../store/photo"
import './PhotoComponent.css'


function AddPhotoForm() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [validationErrors, setValidationErrors] = useState([]);
  const [showErrors, setShowErrors] = useState(false);

  useEffect(() => {
    const errors = [];
    if (title.length > 25) errors.push('Title should be 25 characters or less')
    if (title.length === 0) errors.push("Title can't be blank")
    if (imageUrl.match(/(jpe?g|tiff|png|gif|bmp)/) === null) errors.push('This image link is not an accepted format')
    setValidationErrors(errors)
  }, [title, imageUrl])

  // useEffect(() => {
  //   if (title.length < 1) {
  //     setShowErrors(false)
  //   }
  //   if (imageUrl.length < 1) {
  //     setShowErrors(false)
  //   }
  // }, [title, imageUrl])

  useEffect(() => {
    if (!showErrors) return;
    const closeErrors = () => {
      setShowErrors(false);
    };
    document.addEventListener('click', closeErrors)
    reset();
    return () => document.removeEventListener("click", closeErrors);
  }, [showErrors]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowErrors(true);

    if (validationErrors.length) {
      return setHasSubmitted(true);
    }

    const payload = {
      title,
      imageUrl
    };
    dispatch(createPhoto(payload));
    reset();
    setHasSubmitted(false);
    setValidationErrors([]);
    setShowErrors(false);
  };

  const reset = () => {
    setTitle("");
    setImageUrl("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <ul>
        {hasSubmitted && validationErrors.length > 0 && (
          <div>
            <ul>
              {showErrors && (
                validationErrors.map((error, idx) => <li key={idx}>{error}</li>)
              )}
            </ul>
          </div>
        )}
      </ul>
      <div className='add-image-form'></div>
      <label className='add-image-title'>
        Add Title:
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        // required
        />
      </label>
      <label className='add-image-url'>
        Add Image URL:
        <input
          type="text"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
        // required
        />
      </label>
      <button type="submit">Submit photo</button>
    </form>
  );
}

export default AddPhotoForm;
