import type { PageLoad } from './$types';
 
export const load = ( async ({ fetch, url }) => {

  let params = new URLSearchParams(url.search);
  let searchWord = params.get("searchWord") ? params.get("searchWord") : 'Nevermind'
  let artist = params.get("artist") ? params.get("artist") : 'Nirvana'
  // console.log("artist: ", artist)
  // console.log("searchWord: ", searchWord)

	const response = await fetch(`https://ws.audioscrobbler.com/2.0/?method=album.getinfo&artist=${artist}&album=${searchWord}&api_key=c427f710e83c3ba7be53cdf86dac1e0f&format=json`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "User-agent": "Maybe Music App /0.1 +http://adb.maybe-music.com" 
    }
  });


  const content = await response.json();
  // const artist = data.artist
  // console.log(content)

  return {
    content
  };
}) satisfies PageLoad;