import { error } from "@sveltejs/kit";
import autores from "../../../constantes/autores.js";

/** @type {import('./$types').PageLoad} */
export function load(dados) {
  const autorId = dados.params.id;

  for (let autor of autores) {
    if (autor.id == autorId) {
      return { autor };
    }
  }

  error(404, "Autor não encontrado");
}