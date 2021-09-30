import './Favorites.css'
import { useEffect } from 'react'
import PropTypes from 'prop-types'

const Favorites = ({ favorites, setFavorites }) => {

useEffect(() => {
    let values = Object.keys(localStorage);
    let savedJobs;
    if (values.length) {
      savedJobs = values.map(value => {
        return JSON.parse(localStorage.getItem(value))
      })
      setFavorites([...savedJobs])
    }
}, [])

const removeFromStorage = (id) => {
  localStorage.removeItem(id)
  const remainingCards = favorites.filter(card => id !== card.MatchedObjectId)
  setFavorites([...remainingCards])
  return favorites
}

if (favorites) {
  const favoriteCards = favorites.map(favorite => {
  const theList = favorite.MatchedObjectDescriptor.UserArea.Details.MajorDuties.map((duty, index) => <p className="duty"> • {duty} </p>)

    return (
      <>
      <section className="details">
        <div className="details-card">
          <div className="button-container">
            <button className="delete-btn" onClick={() => removeFromStorage(favorite.MatchedObjectId)}>
            Remove from Favorites
            </button>
          </div>
            <h1 className="heading-details">{ favorite.MatchedObjectDescriptor.PositionTitle }</h1>
            <h2 className="heading-org-details">{ favorite.MatchedObjectDescriptor.OrganizationName }</h2>
            <h2 className="heading-dept-details">{ favorite.MatchedObjectDescriptor.DepartmentName }</h2>
            <p className="role-question">What would you do in this role?</p>
            <section className="duties-details">{ theList } </section>
        </div>
      </section>
      </>
    )
  })

  return (
    <>
    <div className="favorite-container">
      {[favoriteCards]}
      <p className="fav-prompt">Return Home to search for and add more favorites!</p>
    </div>
    </>
  )
  }
}

Favorites.propTypes = {
  favorites: PropTypes.array,
  setFavorites: PropTypes.func,
}

export default Favorites;
