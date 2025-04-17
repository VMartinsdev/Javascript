function verificarListaVazia(listaDeCompras){
    const semItemLista = document.querySelector(".semItemLista");
    var liDaLista = listaDeCompras.querySelectorAll("li");

    if(liDaLista.length === 0){     
        semItemLista.style.display = "block"
    }else{
        semItemLista.style.display = "none"
    }
}

export default verificarListaVazia;