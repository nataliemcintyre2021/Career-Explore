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


if (favorites) {
  const favoriteCards = favorites.map(favorite => {
    let theDuties = ''
    favorite.MatchedObjectDescriptor.UserArea.Details.MajorDuties.forEach((duty, index) => {
      if (index != favorite.MatchedObjectDescriptor.UserArea.Details.MajorDuties.length - 1) {
          theDuties += `${duty}  `;
      } else {
          theDuties += duty;
      }
    })

    return (
      <>
      {console.log("THE CARD")}
      <section className="details">
        <div className="details-card">
          <h1 className="heading-details">{ favorite.MatchedObjectDescriptor.PositionTitle }</h1>
          <h2 className="heading-org-details">{ favorite.MatchedObjectDescriptor.OrganizationName }</h2>
          <h2 className="heading-dept-details">{ favorite.MatchedObjectDescriptor.DepartmentName }</h2>
          <p className="role-question">What would you do in this role?</p>
          <p className="duties-details">{ theDuties.split() } </p>
        </div>

      </section>
      </>
    )
  })


  return (
    <div className="favorite-container">
    {console.log("THE CARD CONTAINER")}
      {[favoriteCards]}
    </div>
  )
} else {
  return (
    <>
    {console.log("THE NULL CONTAINER")}
    </>
  )
}
}



export default Favorites;
