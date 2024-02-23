var client_id = "15f1245eb5f74798ad1a694b07d1d7fe"
var client_secret = "0c9d6fa1e41449e2b1274b486a70ce72"

var redirect_uri = 'http://localhost:8888/callback'

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