import './JobPositionsContainer.css'
import PositionCard from '../PositionCard/PositionCard'

const JobPositionsContainer = ({ postedPositions, searchParameters }) => {
if (postedPositions) {
  const positionCards = postedPositions.SearchResult.SearchResultItems.map(position => {
    return (
      <PositionCard
        id={position.MatchedObjectId}
        key={position.MatchedObjectId}
        positionTitle={position.MatchedObjectDescriptor.PositionTitle}
        deptName={position.MatchedObjectDescriptor.DepartmentName}
        orgName={position.MatchedObjectDescriptor.OrganizationName}
        duties={position.MatchedObjectDescriptor.UserArea.Details.MajorDuties}
        appUrl={position.MatchedObjectDescriptor.ApplyURI[0]}

      />
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
} else {
  return (
    null
  )
}
}



export default JobPositionsContainer;
