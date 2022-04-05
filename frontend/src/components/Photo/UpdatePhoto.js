import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Redirect } from "react-router-dom";
import editPhoto from '../../store/photo'



function UpdatePhoto({ image, hideModal }) {
  const dispatch = useDispatch();
  const [title, setTitle] = useState(image.title);
  const [errors, setErrors] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      ...image,
      title
    };

    await dispatch(editPhoto(payload));
    hideModal()
  };

  const handleCancelClick = (e) => {
    e.preventDefault()
    hideModal()
  };
  return (
    <form onSubmit={handleSubmit}>
      <ul>
        {errors.map((error) => <li key={error}>{error}</li>)}
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
        <button type="button" onClick={handleCancelClick}>Cancel</button>
      </div>
    </form>
  );
}

export default UpdatePhoto;