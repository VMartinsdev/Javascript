var btnEditar = document.getElementById("btnEditar");
var iteradorItem = 0;

btnEditar.addEventListener("click", (editar) => {
    
    const btnAdicionar = document.getElementById("btnAdicionar");
    btnAdicionar.style.display = "inline";
    const btnConcluir = document.getElementById("btnConcluir");
    btnEditar.style.display = "none";
    
    btnConcluir.style.display = "inline";

    var btnRemover = document.querySelectorAll(".btnRemover");

    btnRemover.forEach(bt => bt.style.display = "inline")
    

})

btnConcluir.addEventListener("click", () => {
    btnAdicionar.style.display = "none";
    var btnEditar = document.getElementById("btnEditar");

    btnEditar.style.display = "inline";

    btnConcluir.style.display = "none";

    var btnRemover = document.querySelectorAll(".btnRemover");

    btnRemover.forEach(el => el.style.display = "none");

    
    
})

const btnAdicionar = document.getElementById("btnAdicionar");



btnAdicionar.addEventListener("click", (adcMusica) => {
    const listaDeMusicas = document.getElementById("listaDeMusicas");

    var inputDaMusica = document.getElementById("inputDaMusica").value;

    const itemDaLista = document.createElement("li");
    const textoItemDaLista = document.createElement("p");
    textoItemDaLista.textContent = inputDaMusica;
    const btnRemover = document.createElement("input")
    btnRemover.type = "button";
    btnRemover.value = "remover"
    btnRemover.classList = ("btnRemover");

    btnRemover.addEventListener("click", () => {
        itemDaLista.remove();
      });

    
    itemDaLista.appendChild(textoItemDaLista);
    itemDaLista.appendChild(btnRemover);
    listaDeMusicas.appendChild(itemDaLista);
   
})



    


