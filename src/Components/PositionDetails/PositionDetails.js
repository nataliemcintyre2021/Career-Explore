import './PositionDetails.css'
import { useEffect, useState } from 'react';


const PositionDetails = ({ fetchPositions, postedPositions, currentPosition, searchParameters, loading, setLoading }) => {

const [selectPosition, setSelectPosition] = useState()


useEffect(() => {

  console.log("HERE")
  console.log("window pathname>>>", window.location.pathname)
  let searchParams = window.location.pathname.split("/").splice(1)[0].replace('%20', " ")
  console.log("Search Params>>>", searchParams)

  fetchPositions(searchParams)

}, [])

useEffect(() => {
  if (postedPositions) {
      setPositionDetails()
  }

}, [loading])


const setPositionDetails = () => {
  let urlId = window.location.pathname.split("/").slice(2).join();

  let thePosition = postedPositions.SearchResult.SearchResultItems.find(position => position.MatchedObjectId === urlId)

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
    { selectPosition &&
      <section className="details">
        <div className="details-card">
          <h1 className="heading-details">{ selectPosition.MatchedObjectDescriptor.PositionTitle }</h1>
          <h2 className="heading-org-details">{ selectPosition.MatchedObjectDescriptor.OrganizationName }</h2>
          <h2 className="heading-dept-details">{ selectPosition.MatchedObjectDescriptor.DepartmentName }</h2>
          <p className="role-question">What would you do in this role?</p>
          <p className="duties-details">{ getMajorDuties() } </p>
          <a className="app-link" href={selectPosition.MatchedObjectDescriptor.PositionURI ? selectPosition.MatchedObjectDescriptor.PositionURI : null}>Learn more about applying here!</a>
        </div>
      </section>
    }
  </>
  )
}


export default PositionDetails
