<script lang="ts">
  import type { Snippet } from 'svelte';
  import Logo from "./Logo.svelte";

  let { children }: { children: Snippet } = $props();
</script>

<div class="flex flex-col min-h-screen bg-black text-white">
  <Logo />
  
  <main>
    {@render children()}
  </main>
</div>