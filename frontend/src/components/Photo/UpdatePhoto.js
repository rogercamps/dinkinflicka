import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { editPhoto, getAllPhotos } from '../../store/photo'


function UpdatePhoto({ photo, hideModal }) {
  const dispatch = useDispatch();
  const { photoId } = useParams();
  const [title, setTitle] = useState(photo.title);
  const [errors, setErrors] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      ...photo,
      title
    };

    await dispatch(editPhoto(payload));
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
        <button type="button" onClick={handleUpdateClick}>Cancel</button>
      </div>
    </form>
  );
}

export default UpdatePhoto;
