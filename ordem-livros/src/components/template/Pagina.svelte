<script lang="ts">
  import type { Snippet } from 'svelte';
  import Cabecalho from './Cabecalho.svelte';
  import Rodape from './Rodape.svelte';
  import AreaLateral from './AreaLateral.svelte';

  let { children }: { children: Snippet } = $props();
</script>

<div class="flex flex-col min-h-screen bg-black text-white">
<Cabecalho />
<div class="flex max-w-7xl mx-auto w-full p-5">
  <main class="flex-1">
    {@render children()}
  </main>
  <AreaLateral />

</div>
  
  <Rodape />
</div>