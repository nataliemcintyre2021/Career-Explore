import './JobPositionsContainer.css'

const JobPositionsContainer = ({ postedPositions }) => {
  const jobItems = postedPositions.SearchResult.SearchResultItems
  const positionCards = jobItems.map(position => {
    return (
      <PositionCard
        id={position.MatchedObjectId}
        key={position.MatchedObjectId}
        positionTitle={position.PositionTitle}
        deptName={position.DepartmentName}
        orgName={position.OrganizationName}
        jobDuties={position.UserArea.Details.MajorDuties}
      />
    )
  })
  return (
null
  )
}



export default JobPositionsContainer;
