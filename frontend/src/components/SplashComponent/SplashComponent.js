import { NavLink } from 'react-router-dom';

function SplashComponent() {

  return (
    <>
      {/* <img src="" */}
      <div className='splash-bg-image'>
        <div className="splash-component-outer-div">
          <div className="splash-component-inner-div">
            <NavLink to='/signup' className='get-started'>Get started</NavLink>
            {/* <p className="splash-text">Login or Signup (Demo User vailable within the Login form)</p> */}
          </div>
        </div>
      </div>
      <footer></footer>
    </>
  )
}

export default SplashComponent;
