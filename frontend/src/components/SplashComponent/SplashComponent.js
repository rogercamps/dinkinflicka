import { NavLink } from 'react-router-dom';
import Demo from '../LoginFormModal/Demo'

function SplashComponent() {

  return (
    <>
      {/* <img src="" */}
      <div className='splash-bg-image'>
        <div className="splash-component-outer-div">
          <div className="splash-component-inner-div">
            <NavLink to='/signup' className='get-started'>Get started</NavLink>
          </div>
        </div>
      </div>
      <footer></footer>
    </>
  )
}

export default SplashComponent;
