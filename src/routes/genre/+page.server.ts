import type { PageServerLoad } from './$types';
import type { Actions } from './$types';


let genre
export const actions = {
  default: async (event) => {
    const data = await event.request.formData();
    genre = data.get('genre');
    // console.log("genre", genre)
  }
} satisfies Actions;



export const load = (async ({ fetch, url }) => {

  let params = new URLSearchParams(url.search);
  let searchWord = params.get("searchWord") ? params.get("searchWord") : ''
  genre = searchWord ? searchWord : genre
  // console.log("genre", genre)
  // console.log("searchWord", searchWord)


  const results = await fetch(`https://ws.audioscrobbler.com/2.0/?method=tag.gettopartists&tag=${genre}&api_key=c427f710e83c3ba7be53cdf86dac1e0f&format=json`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "User-agent": "Maybe Music App /0.1 +http://adb.maybe-music.com" 
    }
  });

  const results2 = await fetch(`https://ws.audioscrobbler.com/2.0/?method=tag.gettopalbums&tag=${genre}&api_key=c427f710e83c3ba7be53cdf86dac1e0f&format=json`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "User-agent": "Maybe Music App /0.1 +http://adb.maybe-music.com" 
    }
  });

  const results3 = await fetch(`https://ws.audioscrobbler.com/2.0/?method=tag.gettoptracks&tag=${genre}&api_key=c427f710e83c3ba7be53cdf86dac1e0f&format=json`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "User-agent": "Maybe Music App /0.1 +http://adb.maybe-music.com" 
    }
  });

  const content = await results.json();
  const content2 = await results2.json();
  const content3 = await results3.json();

  // console.log(content)
  // console.log(content2)
  // console.log(content3)


  return {
    content, content2, content3, genre
  };
}) satisfies PageServerLoad;