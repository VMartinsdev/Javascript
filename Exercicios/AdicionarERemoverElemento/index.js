const btnEditar = document.getElementById("btnEditar");

btnEditar.addEventListener("click", () => {
    const btnAdicionar = document.getElementById("btnAdicionar");
    btnAdicionar.style.display = "inline";
    
    btnEditar.value = "Concluir"
    btnEditar.id = "btnConcluir"

    const btnConcluir = document.getElementById("btnConcluir");

    btnConcluir.addEventListener("click", () => {
        btnConcluir.id = "btnEditar"
        btnConcluir.value = "Editar"
        btnAdicionar.style.display = "none";
        const btnEditar = document.getElementById("btnEditar")
        
        return
    })


})



const btnAdicionar = document.getElementById("btnAdicionar");



btnAdicionar.addEventListener("click", (adcMusica) => {
    const listaDeMusicas = document.getElementById("listaDeMusicas");

    var inputDaMusica = document.getElementById("inputDaMusica");

    const itemDaLista = document.createElement("li");
    const textoItemDaLista = document.createElement("p");
    textoItemDaLista.innerText = inputDaMusica.value;
    const btnRemover = document.createElement("input")
    btnRemover.type = "button";
    btnRemover.value = "remover"
    btnRemover.className = ("btnRemover");
    btnAdicionar

    btnRemover.addEventListener("click", () => {
        itemDaLista.remove();
      });

    
    itemDaLista.appendChild(textoItemDaLista);
    itemDaLista.appendChild(btnRemover);
    listaDeMusicas.appendChild(itemDaLista);
   
})



    


