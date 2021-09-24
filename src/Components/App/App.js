import './App.css';
import { useState } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SearchForm from '../SearchForm/SearchForm'
import JobPositionsContainer from '../JobPositionsContainer/JobPositionsContainer'
import PositionDetails from '../PositionDetails/PositionDetails'
import { Route } from 'react-router-dom';

const App = () => {
const [postedPositions, setPostedPositions] = useState()
const [searchParameters, setSearchParameters] = useState()
const [currentPosition, setCurrentPosition] = useState()


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
    .then(data => console.log(data))
    .catch(error => console.log(error))

}

const fetchPositionDetails = (positionTitle) => {
  const url = `https://data.usajobs.gov/api/Search?PositionTitle=${positionTitle}`;
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
    .then(data => setCurrentPosition(data.SearchResult.SearchResultItems[0]))
    .catch(error => console.log(error))
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

      <Route exact path="/:name" render={({ match }) => {
        if (!currentPosition) {
          fetchPositionDetails(match.params.name)
        }

        return (
          <PositionDetails
          fetchPositions= {fetchPositions} postedPositions={postedPositions} currentPosition={currentPosition}/>
      )}} />

      <Footer />
    </>
  );
}

export default App;
