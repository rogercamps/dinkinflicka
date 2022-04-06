import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal/LoginFormModal';
import './Navigation.css';

function Navigation({ isLoaded }) {
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={sessionUser} />
    );
  } else {
    sessionLinks = (
      <>
        <LoginFormModal className='nav-login-modal' />
        <NavLink to="/signup" className='nav-signup'>Sign Up</NavLink>
      </>
    );
  }

  return (
    <ul className='navbar'>
      <NavLink exact to="/"><img id="navBarLogo" src="/images/dinkinFlicka.png" alt=""></img></NavLink>
      {isLoaded && sessionLinks}
    </ul>
  );
}

export default Navigation;
