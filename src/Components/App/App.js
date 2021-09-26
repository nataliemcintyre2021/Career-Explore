import './App.css';
import { useState } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SearchForm from '../SearchForm/SearchForm'
import JobPositionsContainer from '../JobPositionsContainer/JobPositionsContainer'
import PositionDetails from '../PositionDetails/PositionDetails'
import Favorites from '../Favorites/Favorites'
import { Route } from 'react-router-dom';

const dotenv = require('dotenv').config()
const App = () => {
const [postedPositions, setPostedPositions] = useState()
const [searchParameters, setSearchParameters] = useState()
const [loading, setLoading] = useState(true)
const [favorites, setFavorites] = useState([])


const api_key = process.env.REACT_APP_API_KEY

const fetchPositions = (position) => {

  setSearchParameters(position)
  const url = `https://data.usajobs.gov/api/Search?PositionTitle=${position}`;
  var host = 'data.usajobs.gov';
  var userAgent = 'nataliemcintyre2021@gmail.com';
  var authKey = api_key;

  fetch(url, {
    method: 'GET',
    headers: {
      "Host": host,
      "User-Agent": userAgent,
      "Authorization-Key": authKey
    }
  })
    .then(response => response.json())
    .then(data => {
      console.log(data)
      setPostedPositions(data)
      setLoading(false)
    })

    .catch(error => console.log("ERROR!", error))

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
        <JobPositionsContainer postedPositions={postedPositions} searchParameters={searchParameters}/>
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
          searchParameters={searchParameters}
          loading={loading}
          setLoading={setLoading}
          addFavorite={addFavorite}
          />
      )}} />
      <Footer />
    </>
  );
}

export default App;
