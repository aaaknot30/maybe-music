<script lang="ts">
  import type { PageData } from './$types';

  export let data: PageData;
  const { album } = data.content
</script>


<section>

  <h2><a href="/artist?searchWord={album.artist}">{album.artist}</a></h2>
  <h3>{album.name}</h3>
    
  <div class="section-item flex">
    <div>

      {#if album.wiki}
      <h3> Summary</h3>
      <p>{@html album.wiki.summary}</p>
      {/if}

      {#if album.tags} 
        <h3>Related Tags</h3>
        {#each album.tags.tag as tagInfo}
          <p><a href="/genre?searchWord={tagInfo.name}">{tagInfo.name}</a></p> 
  
        {/each}
        {/if}

        <p class="buttonLink"><a href="https://www.youtube.com/results?search_query={album.name} - {album.artist}" target="_blank" rel="noreferrer">See video on Youtube</a></p>
        <p> <a class="buttonLink" href="javascript:history.back()"> Go Back</a> </p>
        
    </div>
     
    <div>

      {#if album.tracks} 
      <h3>Tracks</h3>
      {#if Array.isArray(album.tracks.track)}
        {#each album.tracks.track as trackInfo}
          <p><a href="/track?searchWord={trackInfo.name}&artist={trackInfo.artist.name}">{trackInfo.name}</a></p> 
        {/each}
      {:else}
      <p><a href="/track?searchWord={album.tracks.track.name}&artist={album.tracks.track.name}">{album.tracks.track.name}</a></p> 
      {/if}


      {/if}
    </div>
  </div>  
  

</section>

<style>
  h2 {
    margin-bottom: -.2rem;
  }
  h3 {
    margin-top: .5rem;
  }

  
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
