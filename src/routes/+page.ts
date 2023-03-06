import type { PageLoad } from './$types';
 

const tags = [
  {name: "rock"},
  {name: "electronic"},
  {name: "alternative"},
  {name: "pop"},
  {name: "metal"},
  {name: "70s"},
  {name: "jazz"},
  {name: "classic rock"},
  {name: "funk"},
  {name: "punk"},
  {name: "Hip-Hop"},
  {name: "dance"},
  {name: "80s"},
  {name: "soul"},
  {name: "chillout"},
  {name: "electronica"},
  {name: "rap"},
  {name: "new wave"},
  {name: "synthpop"},
  {name: "Soundtrack"},
  {name: "blues"},
  {name: "acoustic"},
  {name: "psychedelic"},
  {name: "House"},
]



export const load = ( async ({ fetch, params }) => {

  let genre
  const rndNum = Math.floor(Math.random() * tags.length)
  const tmpGenre = tags[rndNum].name
  genre = genre === undefined ? tmpGenre : genre

  const results = await fetch(`http://ws.audioscrobbler.com/2.0/?method=tag.gettopartists&tag=${genre}&api_key=c427f710e83c3ba7be53cdf86dac1e0f&format=json`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "User-agent": "Maybe Music App /0.1 +http://adb.maybe-music.com" 
    }
  });

  const results2 = await fetch(`http://ws.audioscrobbler.com/2.0/?method=tag.gettopalbums&tag=${genre}&api_key=c427f710e83c3ba7be53cdf86dac1e0f&format=json`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "User-agent": "Maybe Music App /0.1 +http://adb.maybe-music.com" 
    }
  });

  const results3 = await fetch(`http://ws.audioscrobbler.com/2.0/?method=tag.gettoptracks&tag=${genre}&api_key=c427f710e83c3ba7be53cdf86dac1e0f&format=json`, {
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
}) satisfies PageLoad;