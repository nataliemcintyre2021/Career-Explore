import './PositionCard.css'
import PropTypes from 'prop-types'

const PositionCard = ({ id, positionTitle, deptName, orgName}) => {

  return (
    <div className='card'>
     <h3>{orgName}</h3>
     <h3>{deptName}</h3>
     <p>{positionTitle}</p>
    </div>
  )
}

PositionCard.propTypes = {
  id: PropTypes.string,
  positionTitle: PropTypes.string,
  deptName: PropTypes.string,
  orgName: PropTypes.string,
}

export default PositionCard;
