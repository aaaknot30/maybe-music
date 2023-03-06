import type { PageLoad } from './$types';
 
export const load = ( async ({ fetch, url }) => {

  let params = new URLSearchParams(url.search);
  let topic = params.get("topic") ? params.get("topic") : 'Nirvana'
  // console.log(topic)
  

	const response = await fetch(`http://ws.audioscrobbler.com/2.0/?method=tag.getinfo&tag=${topic}&api_key=c427f710e83c3ba7be53cdf86dac1e0f&format=json`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "User-agent": "Maybe Music App /0.1 +http://adb.maybe-music.com" 
    }
  });

  const data = await response.json();
  // console.log(data)

  return {
    data
  };
}) satisfies PageLoad;