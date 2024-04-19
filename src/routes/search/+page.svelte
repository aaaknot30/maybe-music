<script lang="ts">
  import type { PageData } from './$types';

  export let data: PageData;
  const artistResults  = data.content.results
  const albumResults = data.content2.results
  const trackResults = data.content3.results

</script>


<section>

<h2> {data.searchWord}</h2>

  <div class="section-item flex raise">
    
    <div>
    
      <h3>Artists Results</h3>
        {#each artistResults.artistmatches.artist as specificArtist}
          <p><a href="/artist?searchWord={specificArtist.name}">{specificArtist.name}</a></p> 
        {/each}

    </div>

    <div>
    
      <h3>Albums Results</h3>
        {#each albumResults.albummatches.album as specificAlbum}
          <p><a href="/album?searchWord={specificAlbum.name}&artist={specificAlbum.artist}">{specificAlbum.name}</a></p> 
        {/each}

    </div>

    <div>
    
      <h3>Tracks Results</h3>
        {#each trackResults.trackmatches.track as specificTrack}
          <p><a href="/track?searchWord={specificTrack.name}">{specificTrack.name}</a></p> 
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
    padding: .2rem .7rem;
    margin: 1rem 0 0 0;
    border: none;
    border-radius: 1rem;
  }

  form {
    margin: 0 0 0 0;
  }

  .raise {
    margin-top: -1rem;
  }

  input[type=radio] {
    border: none;
    width: 1.1rem;
    height: 1.1rem;
    margin: 0;
    }

    .section-item h2 {
      margin: 0 0 0 0;
    }
</style>
