import gerarDataCompleta from "./gerarDataCompleta.js";

var iteradorLista = 0;



export function CriarItemDaLista(){
    var produtoAdicionado = document.getElementById("input-item").value;
    if(produtoAdicionado === ""){
        window.alert("Insira algum valor")
        return
    }
    
    const listaDeCompras = document.getElementById("lista-de-compras");
    const itemDalista = document.createElement("li");

    const containerDaLista = document.createElement("div");
    

    containerDaLista.classList.add("lista-item-container")

    const inputDaLista = document.createElement("input")
    inputDaLista.type = "checkbox";
    inputDaLista.id = "checkbox-" + iteradorLista++;

    


    const nomeItemDaLista = document.createElement("p")
    nomeItemDaLista.innerText = produtoAdicionado;

    containerDaLista.appendChild(inputDaLista);
    containerDaLista.appendChild(nomeItemDaLista);




    itemDalista.appendChild(containerDaLista);


    const dataCompleta = gerarDataCompleta();

    const dataTexto = document.createElement("p");
    dataTexto.innerText = dataCompleta;
    dataTexto.classList = "texto-data"

    itemDalista.appendChild(dataTexto);

    

    inputDaLista.addEventListener("click", () =>{
        if(inputDaLista.checked){
            nomeItemDaLista.style.textDecoration = "line-through"
        }else{
            nomeItemDaLista.style.textDecoration = "none"
        }
    }) 

    return itemDalista;
}