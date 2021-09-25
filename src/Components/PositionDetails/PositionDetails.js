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
  selectPosition.MatchedObjectDescriptor.UserArea.Details.MajorDuties.forEach(duty => {
    theDuties += duty;
  })
  return theDuties
}

  return (
    <>
    { selectPosition &&
      <section>
      <h1>{ selectPosition.MatchedObjectDescriptor.PositionTitle }</h1>
      <p>{ getMajorDuties() } </p>
      </section>
    }
  </>
  )
}


export default PositionDetails
