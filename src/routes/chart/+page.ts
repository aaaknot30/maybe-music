import type { PageLoad } from './$types';
 
export const load = ( async ({ fetch, params }) => {

	const response = await fetch(`http://ws.audioscrobbler.com/2.0/?method=chart.getTopArtists&artist=Cher&api_key=c427f710e83c3ba7be53cdf86dac1e0f&format=json`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "User-agent": "Maybe Music App /0.1 +http://adb.maybe-music.com" 
    }
  });

  const response2 = await fetch(`http://ws.audioscrobbler.com/2.0/?method=chart.getTopTracks&artist=Cher&api_key=c427f710e83c3ba7be53cdf86dac1e0f&format=json`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "User-agent": "Maybe Music App /0.1 +http://adb.maybe-music.com" 
    }
  });

  const content = await response.json();
  const content2 = await response2.json();
  // console.log(content)
  // console.log(content2)


  return {
    content, content2
  };
}) satisfies PageLoad;