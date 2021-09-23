import './JobPositionsContainer.css'
import PositionCard from '../PositionCard/PositionCard'

const JobPositionsContainer = ({ postedPositions }) => {
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

      />
    )
  })

  return (
 [positionCards]
  )
} else {
  return (
    null
  )
}
}



export default JobPositionsContainer;
