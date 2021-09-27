import './NotFound.css';
import { NavLink } from 'react-router-dom';

const NotFound = () => {

  return (
  <div className="error-404">
    <NavLink className="go-back" to={"/"}>
      <p className="error-message">404 - Page Not Found</p>
      <p className="redirect">Head back Home to search again!</p>
    </NavLink>
  </div>
  )
}


export default NotFound;
