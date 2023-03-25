<script lang="ts">
  import type { PageData } from './$types';

  export let data: PageData;
  const artistResults  = data.content.topartists
  const albumResults = data.content2.albums
  const trackResults = data.content3.tracks
  // const tags = data.content4.tags.tag

  

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
    {name: "techno"},
    {name: "blues"},
    {name: "acoustic"},
    {name: "psychedelic"},
    {name: "House"},
  ]

  const tagRange1 = tags.filter((item, i) => {
    if (i < 6) {
      return item
    } 
  })

  const tagRange2 = tags.filter((item, i) => {
    if (i >= 6 && i < 12 ) {
      return item
    } 
  })

  const tagRange3 = tags.filter((item, i) => {
    if (i >= 12 && i < 18 ) {
      return item
    } 
  })

  const tagRange4 = tags.filter((item, i) => {
    if (i >= 18 && i < 24 ) {
      return item
    } 
  })

  let currentGenre = data.genre ? data.genre : ""

 let scoops = currentGenre;


</script>


<section>


<h2>Top {currentGenre}</h2>
<form method="POST" name="form" action="/genre">
<h3>Select a genre <button type="submit">Go</button></h3>

<div class="section-item flex">
  
  <div>
    
      {#each tagRange1 as specificTag}
      
       <p><label for={specificTag.name}> <input type="radio" bind:group={scoops} name="genre" id={specificTag.name} value={specificTag.name} />
       {specificTag.name} </label>
      </p> 
      {/each}
      
  </div>

  <div>
      {#each tagRange2 as specificTag}
      <p><label for={specificTag.name}> <input type="radio" bind:group={scoops} name="genre" id={specificTag.name} value={specificTag.name} />
        {specificTag.name} </label>
       </p> 
      {/each}

  </div>

  <div>
      {#each tagRange3 as specificTag}
      <p><label for={specificTag.name}> <input type="radio" bind:group={scoops} name="genre" id={specificTag.name} value={specificTag.name} />
        {specificTag.name} </label>
       </p> 
      {/each}
    

  </div>

  <div class="lastDiv">

      {#each tagRange4 as specificTag}
       <p><input type="radio" bind:group={scoops} name="genre" id="genre" value={specificTag.name} />
       {specificTag.name} 
      </p> 
      {/each}
      

  </div>

  
</div>
</form>
<div class="section-item">
<h2> Top {currentGenre} results</h2>
</div>

  <div class="section-item flex raise">
    
    <div>
    
      <h3>Artists Results</h3>
        {#each artistResults.artist as specificArtist}
          <p><a href="/artist?searchWord={specificArtist.name}">{specificArtist.name}</a></p> 
        {/each}

    </div>

    <div>
    
      <h3>Albums Results</h3>
        {#each albumResults.album as specificAlbum}
          <p><a href="/album?searchWord={specificAlbum.name}&artist={specificAlbum.artist.name}">{specificAlbum.name}</a></p> 
        {/each}

    </div>

    <div>
    
      <h3>Tracks Results</h3>
        {#each trackResults.track as specificTrack}
          <p><a href="/track?searchWord={specificTrack.name}&artist={specificTrack.artist.name}">{specificTrack.name}</a></p> 
        {/each}

    </div>

    


  </div> 

</section>

<style>
  /* * {
    border: 1px solid blue;
  } */
  button {
    background-color: #FFBB00;
    color: black;
    padding: .2rem 1rem;
    margin: 1rem 0 0 0;
    border: none;
    border-radius: 1rem;
    cursor: pointer;
    font-weight: 700;
  }

  button:hover,
  button:focus {
    background-color: #ffce46;
  }

  form {
    margin: 0 0 0 0;
  }

  .raise {
    margin-top: -1rem;
  }

  input[type=radio] {
    border: none;
    width: 1.2rem;
    height: 1.2rem;
    cursor: pointer;
    }

    .section-item h2 {
      margin: 0 0 0 0;
    }

  label {
    cursor: pointer;
  }

    .flex {
      padding-right: 3rem;
    }

    h2 {
      margin: 1rem 0 -2rem 0;
    }

    @media (max-width: 1100px) {
      .lastDiv {
        visibility: hidden;
      }
  
  }
  
</style>






