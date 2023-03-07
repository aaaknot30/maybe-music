<script lang="ts">
  import type { PageData } from './$types';

  export let data: PageData;

  const { track } = data.content
  console.log(track)


</script>


<section>
  

{#if data.content.message}
  <h2> {data.content.message}</h2>
{:else}


<h2><a href="/artist?searchWord={track.artist.name}"> {track.artist.name} </a></h2>
<h3>{track.name}</h3>

<div class="section-item flex">

<div>
  {#if track.wiki}
  <h3>Summary</h3>
<p>{@html track.wiki.summary}</p>
 
  {/if}
</div>

<div>
{#if track.toptags}
<h3>Related Tags</h3>
  {#each track.toptags.tag as tagInfo}
    <p><a href="/genre?searchWord={tagInfo.name}">{tagInfo.name}</a></p> 

  {/each}
  {/if}
</div>


</div>


<p class="buttonLink"><a href="https://www.youtube.com/results?search_query={track.artist.name} - {track.name}" target="_blank" rel="noreferrer">See video on Youtube</a></p>
<p> <a class="buttonLink" href="javascript:history.back()"> Go Back</a> </p>

{/if}
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

