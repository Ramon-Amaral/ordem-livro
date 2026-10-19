<script lang="ts">
  import { marked } from "marked";

  let { 
    autor = null
  }: { 
    autor?: any
  } = $props();
</script>
{#if autor}
<div class="flex flex-col gap-5">
  <img src={autor?.imagem} alt="Foto do Autor" class="h-96 object-cover rounded-b-md">
  <article class="prose lg:prose-xl prose-invert">
    {@html marked.parse(autor.biografia)}
  </article>
</div>
{/if}