<script lang="ts">
  import ConteudoSerie from "../../../components/serie/ConteudoSerie.svelte";

  let { data } = $props();
</script>

<ConteudoSerie serie={data.serie} />