import './Favorites.css'
import { useEffect } from 'react';

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
          <h1 className="heading-details">{ favorite.MatchedObjectDescriptor.PositionTitle }</h1>
          <h2 className="heading-org-details">{ favorite.MatchedObjectDescriptor.OrganizationName }</h2>
          <h2 className="heading-dept-details">{ favorite.MatchedObjectDescriptor.DepartmentName }</h2>
          <p className="role-question">What would you do in this role?</p>
          <p className="duties-details">{ theList } </p>
          <button className="delete-btn" onClick={() => removeFromStorage(favorite.MatchedObjectId)}>
          &times;
          </button>
        </div>
      </section>
      </>
    )
  })


  return (
    <>

    <div className="favorite-container">
      <h1 className="fav-heading">Favorites</h1>
      {[favoriteCards]}
    </div>
    </>
  )
} else {
  return (
    null
  )
}
}



export default Favorites;
