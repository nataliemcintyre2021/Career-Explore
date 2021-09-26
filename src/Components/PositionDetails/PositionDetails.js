import './PositionDetails.css'
import { useEffect, useState } from 'react';
import Loader from '../Loader/Loader'


const PositionDetails = ({ fetchPositions, postedPositions, currentPosition, searchParameters, loading, setLoading, addFavorite, id }) => {

const [selectPosition, setSelectPosition] = useState()


useEffect(() => {
  fetchPositions(searchParameters)
}, [])

useEffect(() => {
  if (postedPositions) {
      setPositionDetails()
  }
}, [loading])


const setPositionDetails = () => {
  let thePosition = postedPositions.SearchResult.SearchResultItems.find(position => position.MatchedObjectId === id)

  if (postedPositions) {
    setSelectPosition(thePosition)
  }
}



const getMajorDuties = () => {
  let theDuties = ''
  selectPosition.MatchedObjectDescriptor.UserArea.Details.MajorDuties.forEach((duty, index) => {
    if (index != selectPosition.MatchedObjectDescriptor.UserArea.Details.MajorDuties.length - 1) {
        theDuties += `${duty}  `;
    } else {
        theDuties += duty;
    }
  })
  theDuties.split()
  return theDuties;
}

  return (
    <>
    { selectPosition ?
      <section className="details">
        <div className="details-card">
        <div className="favorite"><button class="favorite-button" onClick={() => addFavorite(selectPosition)}>♥ Favorite</button></div>
          <h1 className="heading-details">{ selectPosition.MatchedObjectDescriptor.PositionTitle }</h1>
          <h2 className="heading-org-details">{ selectPosition.MatchedObjectDescriptor.OrganizationName }</h2>
          <h2 className="heading-dept-details">{ selectPosition.MatchedObjectDescriptor.DepartmentName }</h2>
          <p className="role-question">What would you do in this role?</p>
          <p className="duties-details">{ getMajorDuties() } </p>
          <a className="app-link" href={selectPosition.MatchedObjectDescriptor.PositionURI ? selectPosition.MatchedObjectDescriptor.PositionURI : null}>Learn more about applying here!</a>
        </div>

      </section> :
        <Loader />
}
  </>
)
}

export default PositionDetails
