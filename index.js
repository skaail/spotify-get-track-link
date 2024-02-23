
function getSpotifyAuthToken(clientId, clientSecret) {
    return new Promise((resolve, reject) => {
      const authString = `${clientId}:${clientSecret}`;
      const encodedAuthString = Buffer.from(authString).toString('base64');
  
      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Authorization': `Basic ${encodedAuthString}`
        },
        body: 'grant_type=client_credentials'
      };
  
      fetch('https://accounts.spotify.com/api/token', requestOptions)
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.log(error));
    });
}

module.exports = getSpotifyAuthToken;