import './PositionCard.css'

const PositionCard = ({ id, key, positionTitle, deptName, orgName, jobDuties, duties}) => {

  return (
    <div className='card'>
     <h3>{orgName}</h3>
     <h3>{deptName}</h3>
     <p>{positionTitle}</p>
  
    </div>
  )
}

export default PositionCard;
