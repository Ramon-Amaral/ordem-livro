<script>
  import Menu from "./Menu.svelte";
  import Menuitem from "./Menuitem.svelte";

</script>
<aside class=" flex flex-col self-start border border-zinc-800 p-5 rounded-md gap-10 w-72">

 <Menu titulo="Navegação">
 <Menuitem texto="Início" href="/"/>
 <Menuitem texto="Personagens" href="/"/>
 <Menuitem texto="Autores" href="/autores"/>
 <Menuitem texto="Séries" href="/"/>
 </Menu>

 <Menu titulo="Principais Autores">
<Menuitem texto="J.K. Rowling" href="/autores/j-k-rowling"/>
<Menuitem texto ="J.R.R. Tolkien" href="/autores/j-r-r-tolkien"/>
<Menuitem texto="George R.R. Martin" href="/autores/george-r-r-martin"/>
 </Menu>
 <Menu titulo="Outras Categorias"> 
<Menuitem texto="Últimas Notícias" href="/" />
<Menuitem texto="Séries Populares" href="/" />
<Menuitem texto="Facebook" href="/" />
<Menuitem texto="Instagram" href="/" />
<Menuitem texto="Youtube" href="/" />
 </Menu>
</aside>