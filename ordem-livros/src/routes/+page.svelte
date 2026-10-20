<script lang="ts">
  import ItemSerie from "../components/serie/ItemSerie.svelte";
  import series from "../constantes/series.js";
</script>

<div class="flex flex-col gap-5">
{#each series as serie}
  <ItemSerie {serie} />
{/each}

</div>
