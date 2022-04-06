import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { createPhoto } from "../../store/photo"
import './PhotoComponent.css'

function AddPhotoForm() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    console.log(imageUrl.match(/(jpe?g|tiff|png|gif|bmp)$/));
    const errors = [];
    if (title.length > 25) errors.push('Title should be 25 characters or less')
    if (imageUrl.match(/(jpe?g|tiff|png|gif|bmp)$/) === null) errors.push('This image link is not an accepted format')
    setErrors(errors)
  }, [title, imageUrl])

  const handleSubmit = (e) => {
    e.preventDefault()
    const payload = {
      title,
      imageUrl
    };
    dispatch(createPhoto(payload)); //create addPhotoReducer
    reset();

  };

  const reset = () => {
    setTitle("");
    setImageUrl("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <ul>
        {errors.map((error, idx) => <li key={idx}>{error}</li>)}
      </ul>
      <label>
        Title
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </label>
      <label>
        Image URL
        <input
          type="text"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          required
        />
      </label>
      <button type="submit">Submit photo</button>
    </form>
  );
}

export default AddPhotoForm;
