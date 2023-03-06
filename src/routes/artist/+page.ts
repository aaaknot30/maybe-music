import type { PageLoad } from './$types';
 
export const load = ( async ({ fetch, url }) => {

  let params = new URLSearchParams(url.search);
  let searchWord = params.get("searchWord") ? params.get("searchWord") : 'Nirvana'
  

	const response = await fetch(`https://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${searchWord}&api_key=c427f710e83c3ba7be53cdf86dac1e0f&format=json`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "User-agent": "Maybe Music App /0.1 +http://adb.maybe-music.com" 
    }
  });

  const response2 = await fetch(`https://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=${searchWord}&api_key=c427f710e83c3ba7be53cdf86dac1e0f&format=json`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "User-agent": "Maybe Music App /0.1 +http://adb.maybe-music.com" 
    }
  });

  const response3 = await fetch(`https://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist=${searchWord}&api_key=c427f710e83c3ba7be53cdf86dac1e0f&format=json`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "User-agent": "Maybe Music App /0.1 +http://adb.maybe-music.com" 
    }
  });

  const data = await response.json();
  const data2 = await response2.json();
  const data3 = await response3.json();

  // console.log(data)

  const artist = data.artist
  const topAlbums = data2.topalbums
  const topTracks = data3.toptracks

  return {
    artist, topAlbums, topTracks
  };
}) satisfies PageLoad;