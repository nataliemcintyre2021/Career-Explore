import './PositionDetails.css'
import { useEffect, useState } from 'react';
import Loader from '../Loader/Loader'


const PositionDetails = ({ fetchPositions, postedPositions, currentPosition, searchParameters, loading, setLoading, addFavorite, id, setError, error }) => {

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

  if (!thePosition) {
    setError(true)
  }

  if (postedPositions) {
    setSelectPosition(thePosition)
  }
}

const getMajorDuties = () => {
  const theList = selectPosition.MatchedObjectDescriptor.UserArea.Details.MajorDuties.map((duty, index) => <p className="duty"> • {duty} </p>)

  return theList;
}

  return (
    <>
    { selectPosition ?
      <section className="the-details">
        <div className="the-details-card">
        <div className="favorite"><button class="favorite-button" onClick={() => addFavorite(selectPosition)}>♥ Add to Favorites</button></div>
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
