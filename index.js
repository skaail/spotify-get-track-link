async function getSpotifyAuthToken(clientId, clientSecret) {
    const response = await fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Basic ' + btoa(clientId + ':' + clientSecret)
      },
      body: 'grant_type=client_credentials'
    });
  
    const data = await response.json();
    return data.access_token;
}
  

  
module.exports = {getSpotifyAuthToken}