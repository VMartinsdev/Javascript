import {CriarItemDaLista} from scripts/CriarItemDaLista.js

const btnAdicionarItem = document.getElementById("adicionar-item");


const listaDeCompras = document.getElementById('lista-de-compras')

btnAdicionarItem.addEventListener("click", (adicionarItem) => {
    CriarItemDaLista(); 
    adicionarItem.preventDefault();
    var produtoAdicionado = document.getElementById("input-item").value;

    if(produtoAdicionado === ""){
        window.alert("Insira algum valor")
        return
    }
    
    
    inputDaLista.addEventListener("click", () =>{
        if(inputDaLista.checked){
            nomeItemDaLista.style.textDecoration = "line-through"
        }else{
            nomeItemDaLista.style.textDecoration = "none"
        }
    }) 

    textoLista(); 
    
})

const semItemLista = document.querySelector(".semItemLista");

function textoLista(){
    
    
    var liDaLista = listaDeCompras.querySelectorAll("li");
    console.log(liDaLista)

    if(liDaLista.length === 0){
        semItemLista.style.display = "block"
    }else{
        semItemLista.style.display = "none"
    }
}


textoLista();  