import './PositionDetails.css'
import { useEffect, useState } from 'react';


const PositionDetails = ({ fetchPositions, postedPositions, currentPosition, searchParameters }) => {

const [selectPosition, setSelectPosition] = useState()
const [loading, setLoading] = useState()

useEffect(() => {
  setLoading(true)
  console.log("HERE")
  console.log("window pathname>>>", window.location.pathname)
  let searchParams = window.location.pathname.split("/").splice(1)[0].replace('%20', " ")
  console.log("Search Params>>>", searchParams)

  fetchPositions(searchParams)
  if (postedPositions) {
    setPositionDetails()
    setLoading(false)
  }



}, [])



const setPositionDetails = () => {
  let urlId = window.location.pathname.split("/").slice(2).join();

  let thePosition = postedPositions.SearchResult.SearchResultItems.find(position => position.MatchedObjectId === urlId)

  setSelectPosition(thePosition)
}

  return (
    <>
    { !loading ?
      <section>
     {`${selectPosition.MatchedObjectDescriptor.UserArea.Details.MajorDuties[0]}`}
      </section>
      : null}
  </>
  )
}


export default PositionDetails
