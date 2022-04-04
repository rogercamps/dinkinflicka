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
    const errors = [];
    if (title.length > 25) errors.push('Title should be 25 characters or less')
    if (title.length === 0) errors.push("Title can't be blank")
    setErrors(errors)
  }, [title])

  const handleSubmit = (e) => {
    e.preventDefault()
    const photoInfo = {
      title,
      imageUrl
    };
    dispatch(createPhoto(photoInfo)); //create addPhotoReducer
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
