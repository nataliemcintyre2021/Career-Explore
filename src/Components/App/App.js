import './App.css';
import { useState } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SearchForm from '../SearchForm/SearchForm'
import JobPositionsContainer from '../JobPositionsContainer/JobPositionsContainer'
import PositionDetails from '../PositionDetails/PositionDetails'
import Favorites from '../Favorites/Favorites'
import { Route } from 'react-router-dom';
import { getPositions } from '../../apiCalls'

const dotenv = require('dotenv').config()
const App = () => {
const [postedPositions, setPostedPositions] = useState()
const [searchParameters, setSearchParameters] = useState()
const [loading, setLoading] = useState()
const [favorites, setFavorites] = useState([])
const [error, setError] = useState('')


const fetchPositions = (position) => {
setLoading(true)
  setSearchParameters(position)
  getPositions(position)
    .then(data => {
      setPostedPositions(data)
      setLoading(false)
    })

    .catch(error => setError(error.message))

}

const addFavorite = (position) => {
  if (!favorites.includes(position)) {
    let stringifiedFavorite = JSON.stringify(position);
    localStorage.setItem(`${position.MatchedObjectId}`, stringifiedFavorite)
    }
  }




  return (
    <>
      <Header />
      <Route exact path="/" render={() => {
        return (
        <>
        <SearchForm fetchPositions={fetchPositions}/>
        <JobPositionsContainer postedPositions={postedPositions} searchParameters={searchParameters} loading={loading}/>
        </>
      )}} />

      <Route exact path="/favorites" render={() => {
        return (
          <Favorites favorites={favorites} setFavorites={setFavorites}/>
        )
      }} />

      <Route exact path="/:searchParameters/:id" render={({ match }) => {
        return (
          <PositionDetails
          fetchPositions= {fetchPositions} postedPositions={postedPositions}
          searchParameters={match.params.searchParameters}
          loading={loading}
          setLoading={setLoading}
          addFavorite={addFavorite}
          id={match.params.id}
          />
      )}} />
      <Footer />
    </>
  );
}

export default App;
