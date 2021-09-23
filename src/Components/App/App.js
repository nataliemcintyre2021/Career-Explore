import './App.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SearchForm from '../SearchForm/SearchForm'

const App = () => {

const fetchPositions = (position) => {
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


  return (

    <>
      <Header />

      <SearchForm fetchPositions={fetchPositions}/>

      <Footer />
    </>
  );
}

export default App;
