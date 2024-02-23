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
  
const axios = require('axios')


const get_link = async (searchInput) => {
    const token = await getSpotifyAuthToken("47d629387eff4cc2a731e7f2c290302e", "5bcf17b2ac36460480687f83171004ae")

	const res = await axios.get(
		`https://api.spotify.com/v1/search?q=${searchInput}&type=album&limit=20`,
		{
			headers: {
				'Authorization': `Bearer ${token}`,
			}
		}
	);
    console.log(res.data.albums.items[0].href)
	return res.data;
};

const get_uri = async (searchInput) => {
    const token = await getSpotifyAuthToken("47d629387eff4cc2a731e7f2c290302e", "5bcf17b2ac36460480687f83171004ae")

	const res = await axios.get(
		`https://api.spotify.com/v1/search?q=${searchInput}&type=album&limit=20`,
		{
			headers: {
				'Authorization': `Bearer ${token}`,
			}
		}
	);
    console.log(res.data.albums.items[0].uri)
	return res.data;
};
  
module.exports = {
  getSpotifyAuthToken,
  get_link,
  get_uri
}