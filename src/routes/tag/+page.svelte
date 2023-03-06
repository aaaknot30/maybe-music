<script lang="ts">
  import type { PageData } from './$types';

  export let data: PageData;
  const { tag } = data.content
</script>


<section>
<h2>{tag.name}</h2>

<div class="section-item">
    <div>
      <h3>Summary</h3>
      <p>{tag.wiki.content}</p>
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
</style>

