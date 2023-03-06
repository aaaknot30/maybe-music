import type { PageLoad } from './$types';
 
export const load = ( async ({ fetch, params }) => {

// /2.0/?method=artist.search&artist=cher&api_key=YOUR_API_KEY&format=json
//  /2.0/?method=tag.gettopalbums&tag=disco&api_key=YOUR_API_KEY&format=json

	const response = await fetch(`http://ws.audioscrobbler.com/2.0/?method=tag.getInfo&tag=pop&track=believe&api_key=c427f710e83c3ba7be53cdf86dac1e0f&format=json`, {
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