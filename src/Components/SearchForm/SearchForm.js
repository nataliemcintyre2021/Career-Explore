import { useState } from 'react';
import "./SearchForm.css"


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

      <section className="search-prompt">
        <p>Search for any government job title below and learn about what they get to do!</p>
      </section>
      <section className="form-search">
        <form>
          <input
            type='text'
            placeholder='Ex: Software Engineer'
            name='positionInput'
            value={positionInput}
            onChange={event => handleChange(event)}
          />
          <button className="job-search" onClick={(event) => submitInput(event)}>Search</button>
        </form>

      </section>

    </main>
    </>
  )
}

export default SearchForm;
