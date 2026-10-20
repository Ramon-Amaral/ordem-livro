<script lang="ts">
  let { 
    principal = "", 
    secundario = "" 
  }: { 
    principal?: string; 
    secundario?: string; 
  } = $props();
</script>

<div class="flex flex-col">
  <h1 class="text-3xl font-black">{principal}</h1>
  <p class="text-sm text-olive-400">{secundario}</p>
</div>