import "./SearchForm.css"

const SearchForm = () => {
  return (
    <section class="form-search">
      <form>
        <input
          type='text'
          placeholder='Ex: Software Engineer'
          name='jobName'
        />
        <button className="job-search">SEARCH</button>
      </form>
    </section>
  )
}



export default SearchForm;
