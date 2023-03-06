<script lang="ts">
  import type { PageData } from './$types';

  export let data: PageData;
  $: tag = data.data.tag

</script>


<section>
  <h2> {tag.name}</h2>
    
  <div class="section-item flex">
    <div>

      <h3>Summary</h3>
      <p>{@html tag.wiki.summary}</p>
      <a href="javascript:history.back()"> Go Back</a>

    </div>


  </div>

</section>

<style>

p {
  margin: 0 0 1rem 0;
}



</style>







