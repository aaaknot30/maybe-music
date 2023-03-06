<script lang="ts">
  import type { PageData } from './$types';


  export let data: PageData;

  const artistResults  = data.content.topartists
  const albumResults = data.content2.albums
  const trackResults = data.content3.tracks

</script>


<section>
  <h2> Why Maybe Music?</h2>
    
  <div class="section-item">
    <div>
      <p>Maybe Music uses the <strong>Last.fm API</strong> for it's content.   The Last.fm API has thousands of up-to-the-minute data on  top artists, top albums and top tracks from over 50 genres.     
        </p>
        <p>Maybe Music organizes this vast database of information in a quick and easy way.  Try it.</p>
        <p>See how easily <strong> tracks, artists, albums and genres</strong> interconnect.  The goal is to find and discover tracks/artists, then link to the video. </p>
      
    </div>
    <h3> Example genre: {data.genre}</h3>
    </div>

    <div class="section-item flex">
      <div>
    
        <h3>Top Artists</h3>
          {#each artistResults.artist as specificArtist}
            <p><a href="/artist?searchWord={specificArtist.name}">{specificArtist.name}</a></p> 
          {/each}
  
      </div>
  
      <div>
      
        <h3>Top Albums</h3>
          {#each albumResults.album as specificAlbum}
            <p><a href="/album?searchWord={specificAlbum.name}&artist={specificAlbum.artist.name}">{specificAlbum.name}</a></p> 
          {/each}
  
      </div>
  
      <div>
      
        <h3>Top Tracks</h3>
          {#each trackResults.track as specificTrack}
            <p><a href="/track?searchWord={specificTrack.name}&artist={specificTrack.artist.name}">{specificTrack.name}</a></p> 
          {/each}
  
      </div>
  
  </div>

</section>

<style>

h2 {
  margin: 1rem 0 .5rem 0;
}

h3 {
  margin: 1rem 0 0 0;
}
</style>






