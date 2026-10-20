<script lang="ts">
  let { serie = null }: { serie: any } = $props();
</script>

{#if serie}
  <div>
    {serie.id}
  </div>
{/if}