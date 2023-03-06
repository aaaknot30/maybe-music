import type { PageServerLoad } from './$types';
import type { Actions } from './$types';


let fin
let genre
export const actions = {
  default: async (event) => {
    const data = await event.request.formData();
    // console.log("data", data)
    fin = data.get('searchWord');
    genre = data.get('genre');
    // console.log("fin", fin)
    // console.log("genre", genre)
  }
} satisfies Actions;



export const load = (async ({ fetch, url }) => {

  let params = new URLSearchParams(url.search);
  let search = params.get("searchWord")
  // console.log("url.search", url.search)
  // console.log("search", search)

  // const searchWord = url.searchParams
  const word = search ? search : 'Nirvana'
  let searchWord = fin ? fin : word


  const results = await fetch(`http://ws.audioscrobbler.com/2.0/?method=artist.search&artist=${searchWord}&api_key=c427f710e83c3ba7be53cdf86dac1e0f&format=json`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "User-agent": "Maybe Music App /0.1 +http://adb.maybe-music.com" 
    }
  });

  const results2 = await fetch(`http://ws.audioscrobbler.com/2.0/?method=album.search&album=${searchWord}&api_key=c427f710e83c3ba7be53cdf86dac1e0f&format=json`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "User-agent": "Maybe Music App /0.1 +http://adb.maybe-music.com" 
    }
  });

  const results3 = await fetch(`http://ws.audioscrobbler.com/2.0/?method=track.search&track=${searchWord}&api_key=c427f710e83c3ba7be53cdf86dac1e0f&format=json`, {
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
    content, content2, content3, searchWord, genre
  };
}) satisfies PageServerLoad;