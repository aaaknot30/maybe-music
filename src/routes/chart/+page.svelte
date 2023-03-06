<script lang="ts">
  import type { PageData } from './$types';

  export let data: PageData;

  const {artists}  = data.content
  const {tracks}  = data.content2
</script>

<!-- 
Top Artists
artists.artist[].name
artists.artist[].url

Top Tracks
tracks.track[].artist.name
tracks.track[].artist.url
tracks.track[].name
tracks.track[].url
tracks.track[].playcount -->


<section>
  <h2> Top charts</h2>
    
  <div class="section-item flex">
    <div>


      <h3>Top Artists</h3>
      {#each artists.artist as specificArtist}
        <p><a href="/artist?searchWord={specificArtist.name}">{specificArtist.name}</a></p>  
      {/each}

    </div>
    <div>
    


      <h3>Top Tracks</h3>
      {#each tracks.track as specificTrack}
        <p><a href="/track?searchWord={specificTrack.name}&artist={specificTrack.artist.name}">{specificTrack.name}</a> - {specificTrack.artist.name}</p> 
        <!-- < href="/track?searchWord={specificTrack.name}&artist={specificTrack.artist.name}"> -->
      {/each}

    </div>


  </div>

</section>







