<script lang="ts">
  import type { Snippet } from "svelte";

  let {
    href = "",
    texto = "",
    children,
  }: {
    href?: string;
    texto?: string;
    children?: Snippet;
  } = $props();
</script>

<li>
  <a
    {href}
    class="
      flex gap-2 items-center cursor-pointer px-4 py-2
      text-zinc-300 hover:underline hover:text-white
      hover:bg-white/10
    "
  >
    {@render children?.()}
    <span>{texto}</span>
  </a>
</li>