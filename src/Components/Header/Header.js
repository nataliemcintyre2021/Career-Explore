import "./Header.css"
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <div className="shape">
        <div class="custom-shape-divider-top-1632345337">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" class="shape-fill"></path>
          </svg>
        </div>
      </div>
      <section className="menu">
      <NavLink className="favs" to={`/favorites`}>
        <a
          href=''
          className='favorites-page'
          >Favorites</a>
      </NavLink>
      <NavLink className="jobs" to={`/job-resources`}>
        <a
          href=''
          className='resources-page'
          >Job Resources</a>
      </NavLink>
      </section>
      <NavLink className="title-link" to={"/"}>
        <section className="title">
          <h1 className="career-title">Career Explore</h1>
          <h2 className="government-title">Government Jobs</h2>
        </section>
      </NavLink>

    </header>
  )
}



export default Header;
