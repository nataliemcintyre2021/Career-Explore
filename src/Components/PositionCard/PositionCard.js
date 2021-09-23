import './PositionCard.css'

const PositionCard = ({ id, key, positionTitle, deptName, orgName, jobDuties, duties, appUrl}) => {

  return (
    <div className='card'>
     <h3>{orgName}</h3>
     <h3>{deptName}</h3>
     <p>{positionTitle}</p>

     <a href={appUrl ? appUrl : null}>Apply Here!</a>
    </div>
  )
}

export default PositionCard;
