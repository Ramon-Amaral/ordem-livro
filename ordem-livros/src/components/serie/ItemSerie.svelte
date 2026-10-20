<script lang="ts">
  let { serie = null }: { serie: any } = $props();
</script>

{#if serie}
  <a href="/series/{serie.id}" class="flex flex-col rounded-b-md overflow-hidden border border-zinc-800">
    <img src="{serie.imagem}" alt="Imagem da Serie" class="h-96 object-cover">
    <div class="flex flex-col gap-2 p-5">
      <span class="text-2xl font-black">{serie.titulo}</span>
      <span class="text-sm text-zinc-400 text-justify">{serie.descricao}</span>
      <button class="botao azul self-end">Leia Mais</button>
    </div>
  </a>
{/if}