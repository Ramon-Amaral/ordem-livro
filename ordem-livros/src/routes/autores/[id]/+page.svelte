<script>
  import ConteudoAutor from "../../../components/autor/ConteudoAutor.svelte";

  let { data } = $props();
</script>

<ConteudoAutor autor={data.autor} />