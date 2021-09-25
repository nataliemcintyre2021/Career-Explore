import './Favorites.css'

const Favorites = ({ favorites }) => {
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
      <section className="details">
        <div className="details-card">
          <h1 className="heading-details">{ favorite.MatchedObjectDescriptor.PositionTitle }</h1>
          <h2 className="heading-org-details">{ favorite.MatchedObjectDescriptor.OrganizationName }</h2>
          <h2 className="heading-dept-details">{ favorite.MatchedObjectDescriptor.DepartmentName }</h2>
          <p className="role-question">What would you do in this role?</p>
          <p className="duties-details">{ theDuties.split() } </p>
        </div>

      </section>
    )
  })


  return (
    <div className="favorite-container">
      {[favoriteCards]}
    </div>
  )
} else {
  return (
    null
  )
}
}



export default Favorites;
