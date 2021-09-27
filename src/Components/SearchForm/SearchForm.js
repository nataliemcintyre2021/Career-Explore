import { useState } from 'react';
import "./SearchForm.css"
import PropTypes from 'prop-types'
import arrow from "../../icons8-down-arrow-64 (1).png"

const SearchForm = ({ fetchPositions }) => {
  const [positionInput, setPositionInput] = useState("");

  const handleChange = event => {
    setPositionInput(event.target.value)
  }

  const submitInput = event => {
    event.preventDefault();
    fetchPositions(positionInput)
    clearInputs()
  }

  const clearInputs = () => {
    setPositionInput("");
  }

  return (
    <>
    <main className="main-page">
      <form className="form-search">
        <section className="the-prompts">
          <div className="arrow-container">
            <img className="arrow" src={arrow} alt="Arrow"/>
            <p className="question">Do you have interest in a US government role?</p>
          </div>
          <div className="arrow-container2">
            <img className="arrow" src={arrow} alt="Arrow"/>
            <p className="question">Put on any job “hat” for a moment and imagine yourself in that position!</p>
          </div>
        </section>
          <section className="the-search">
            <p className="prompt">Search for any government job title and learn about what they get to do!</p>
            <input
              type='text'
              placeholder='Ex: Software Engineer'
              name='positionInput'
              value={positionInput}
              onChange={event => handleChange(event)}
            />
            <button className="job-search" disabled={!positionInput} onClick={(event) => submitInput(event)}>Search</button>
        </section>
      </form>
    </main>
    </>
  )
}

SearchForm.propTypes = {
  fetchPositions: PropTypes.func
}

export default SearchForm;
