import type { PageLoad } from './$types';
 
export const load = ( async ({ fetch, params }) => {

	const response = await fetch(`https://ws.audioscrobbler.com/2.0/?method=artist.search&artist=Nirvana&api_key=c427f710e83c3ba7be53cdf86dac1e0f&format=json`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "User-agent": "Maybe Music App /0.1 +http://adb.maybe-music.com" 
    }
  });

  const content = await response.json();
  const searchWord = 'The Beatles'
  
  // console.log(content)

  return {
    content, searchWord
  };
}) satisfies PageLoad;