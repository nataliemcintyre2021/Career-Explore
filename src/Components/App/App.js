import './App.css';
import { useState } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SearchForm from '../SearchForm/SearchForm'
import JobPositionsContainer from '../JobPositionsContainer/JobPositionsContainer'
import PositionDetails from '../PositionDetails/PositionDetails'
import Favorites from '../Favorites/Favorites'
import { Route } from 'react-router-dom';

const App = () => {
const [postedPositions, setPostedPositions] = useState()
const [searchParameters, setSearchParameters] = useState()
const [loading, setLoading] = useState(true)
const [favorites, setFavorites] = useState([])




const fetchPositions = (position) => {

  setSearchParameters(position)
  const url = `https://data.usajobs.gov/api/Search?PositionTitle=${position}`;
  var host = 'data.usajobs.gov';
  var userAgent = 'nataliemcintyre2021@gmail.com';
  var authKey = '/OzvruqvX5Jcf9J84/TH1epCY/n9yJu6q1PIOGw4AMI=';

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
      setFavorites([...favorites, position])
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
          <Favorites favorites={favorites}/>
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
