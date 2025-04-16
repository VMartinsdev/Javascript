import {CriarItemDaLista} from "./scripts/CriarItemDaLista.js";
import verificarListaVazia from "./scripts/verificarListaVazia.js";

const btnAdicionarItem = document.getElementById("adicionar-item");
const listaDeCompras = document.getElementById("lista-de-compras")



btnAdicionarItem.addEventListener("click", (adicionarItem) => {
    adicionarItem.preventDefault(); 
    const itemDaLista = CriarItemDaLista();
    listaDeCompras.appendChild(itemDaLista);
    verificarListaVazia(listaDeCompras);
    
})



verificarListaVazia(listaDeCompras);
  