<script lang="ts">
  import type { PageData } from './$types';

  export let data: PageData;
  $: artist = data.artist
  const artistResults = data.results

</script>


<section>
  <h2> {artist.name}</h2>
  <h3>Summary</h3>
  <p>{@html artist.bio.summary}</p>
    
  <div class="section-item flex">
    <div>

     


      <h3>Top Albums</h3>
        {#each data.topAlbums.album as specificAlbum}
          <p><a href="/album?searchWord={specificAlbum.name}&artist={specificAlbum.artist.name}">{specificAlbum.name}</a></p> 
        {/each}

       
    </div>

    <div>


        
      <h3>Top Tracks</h3>
      {#each data.topTracks.track as specificTrack}
        <p><a href="/track?searchWord={specificTrack.name}&artist={specificTrack.artist.name}">{specificTrack.name}</a></p> 
      {/each}


    </div>

    <div>

      <h3>Similar Artists</h3>
      {#each artist.similar.artist as specificArtist}
        <p><a href="/artist?searchWord={specificArtist.name}">{specificArtist.name}</a></p> 
      {/each}

      <h3>Related Tags</h3>
      {#each artist.tags.tag as tagInfo}
        <p><a href="/genre?searchWord={tagInfo.name}">{tagInfo.name}</a></p> 
      {/each}


    </div>


  </div>
  <p> <a class="buttonLink" href="javascript:history.back()"> Go Back</a> </p>

</section>

<style>


  .buttonLink {
    background-color: #FFBB00;
    color: #222;
    padding: .2rem .7rem;
    margin: 1rem 0 1rem 0;
    border: none;
    border-radius: 1rem;
    max-width: 160px;
  }
</style>
