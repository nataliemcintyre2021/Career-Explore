import "./Home.css"
import SearchForm from '../SearchForm/SearchForm'

const Home = () => {
  return (
    <main className="main-page">
      <section className="prompts">
        <p>Do you have interest in a US government role?</p>
      </section>
      <section class="form-search">
        <form>
          <input
            type='text'
            placeholder='Ex: Software Engineer'
            name='jobName'
          />
          <button className="job-search">Search</button>
        </form>
      </section>

    </main>
  )
}

export default Home;
