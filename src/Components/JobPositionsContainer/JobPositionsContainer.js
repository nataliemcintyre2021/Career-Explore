import './JobPositionsContainer.css'
import PositionCard from '../PositionCard/PositionCard'

const JobPositionsContainer = ({ postedPositions }) => {
if (postedPositions) {
  const positionCards = postedPositions.SearchResult.SearchResultItems.map(position => {
    return (
      <PositionCard
        id={position.MatchedObjectId}
        key={position.MatchedObjectId}
        positionTitle={position.PositionTitle}
        deptName={position.DepartmentName}
        orgName={position.OrganizationName}

      />
    )
  })

  return (
 {positionCards}
  )
} else {
  return (
    null
  )
}
}



export default JobPositionsContainer;
