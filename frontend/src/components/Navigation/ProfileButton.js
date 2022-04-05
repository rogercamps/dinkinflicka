import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';
import AddPhotoForm from "../Photo/AddPhotoForm";
import PhotoComponentIndex from '../Photo/PhotoComponentIndex'
import UpdatePhoto from '../Photo/UpdatePhoto'

function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener('click', closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
  };

  return (
    <>
      <button onClick={openMenu}>
        <div id="profile-icon">
          <i className="fas fa-user-circle" />
        </div>
      </button>
      {showMenu && (
        <ul className="profile-dropdown">
          <li>{user.username}</li>
          <li>{user.email}</li>
          <li>
            <button onClick={logout}>Log Out</button>
          </li>
        </ul>
      )}
      <AddPhotoForm />
      {/* <UpdatePhoto image={image} hideModal={hideModal} /> */}
      <PhotoComponentIndex />
    </>
  );
}

export default ProfileButton;
