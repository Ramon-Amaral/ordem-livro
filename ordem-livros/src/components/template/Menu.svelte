<script lang="ts">
  import type { Snippet } from "svelte";
  
  let {children,
    titulo = "Menu"

  }: {children: Snippet; titulo?: string} = $props();
 
</script>


<div class="flex flex-col gap-3">
  <span class="text-sm font-bold text-zinc-500">Menu</span>
  <ul class="flex flex-col">
    {@render children()}
  </ul>
</div>