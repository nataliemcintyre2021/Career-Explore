import './JobPositionsContainer.css'
import PositionCard from '../PositionCard/PositionCard'
import Loader from '../Loader/Loader'
import NotFound from '../NotFound/NotFound'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'


const JobPositionsContainer = ({ postedPositions, searchParameters, loading, error }) => {

if (postedPositions) {
  const positionCards = postedPositions.SearchResult.SearchResultItems.map(position => {
    return (
      <NavLink className="card-link" to={`/${searchParameters}/${position.MatchedObjectId}`}>
        <PositionCard
          id={position.MatchedObjectId}
          key={position.MatchedObjectId}
          positionTitle={position.MatchedObjectDescriptor.PositionTitle}
          deptName={position.MatchedObjectDescriptor.DepartmentName}
          orgName={position.MatchedObjectDescriptor.OrganizationName}
          duties={position.MatchedObjectDescriptor.UserArea.Details.MajorDuties}
          appUrl={position.MatchedObjectDescriptor.ApplyURI[0]}
        />
      </NavLink>
    )
  })

  return (
    <>
      <h2 className="search-results-title">Search Results for: "{[searchParameters]}"</h2>
      <div className="job-container">
        {[positionCards]}
      </div>
    </>
  )
  } else if (loading) {
      return (
        <Loader />
      )
  } else {
      return (
      null
    )
  }
}

JobPositionsContainer.propTypes = {
  postedPositions: PropTypes.object,
  searchParameters: PropTypes.string,
  loading: PropTypes.bool,
  error: PropTypes.bool
}

export default JobPositionsContainer;
