export const getPositions = (position) => {
  const api_key = process.env.REACT_APP_API_KEY
  const url = `https://data.usajobs.gov/api/Search?PositionTitle=${position}`;
  var host = 'data.usajobs.gov';
  var userAgent = 'nataliemcintyre2021@gmail.com';
  var authKey = api_key;
  return fetch(url, {
    method: 'GET',
    headers: {
      "Host": host,
      "User-Agent": userAgent,
      "Authorization-Key": authKey
    }
  })
    .then(response => checkForErrors(response))
}

export const checkForErrors = (response) => {
  if (!response.ok) {
    throw new Error (`${response.status} - something went wrong. ${response.statusText}`);
  }
  return response.json()
}
