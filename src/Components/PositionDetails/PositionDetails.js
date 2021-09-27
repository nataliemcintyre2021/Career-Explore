import './PositionDetails.css'
import { useEffect, useState } from 'react'
import Loader from '../Loader/Loader'
import NotFound from '../NotFound/NotFound'
import PropTypes from 'prop-types'


const PositionDetails = ({ fetchPositions, postedPositions, searchParameters, loading, addFavorite, id }) => {

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
  const theList = selectPosition.MatchedObjectDescriptor.UserArea.Details.MajorDuties.map((duty, index) => <p className="duty"> • {duty} </p>)

  return theList;
}

  return (
    <>
    {loading && <Loader />}
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
        <NotFound/>
  }
    </>
  )
}

PositionDetails.propTypes = {
  fetchPositions: PropTypes.func,
  postedPositions: PropTypes.object,
  searchParameters: PropTypes.string,
  loading: PropTypes.bool,
  addFavorite: PropTypes.func,
  id: PropTypes.string
}

export default PositionDetails
