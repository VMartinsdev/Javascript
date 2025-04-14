const btnAdicionarItem = document.getElementById("adicionar-item");
var iteradorLista = 0;

const listaDeCompras = document.getElementById('lista-de-compras')

btnAdicionarItem.addEventListener("click", (adicionarItem) => {
    adicionarItem.preventDefault();
    var produtoAdicionado = document.getElementById("input-item").value;

    if(produtoAdicionado === ""){
        window.alert("Insira algum valor")
        return
    }
    
    

    console.log(listaDeCompras)

    const itemDalista = document.createElement("li");
    console.log(itemDalista)

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

    

    
    const diaDaSemana = new Date().toLocaleDateString("pt-BR",{ weekday: "long"});
    const data = new Date().toLocaleDateString("pt-BR")
    const horaAtutal = new Date().toLocaleTimeString("pt-BR", {
        hour: "numeric",
        minute: "numeric"
    })
    const DataCompleta = `${diaDaSemana} (${data}) às ${horaAtutal}`;
    console.log(DataCompleta)

    const dataTexto = document.createElement("p");
    dataTexto.innerText = DataCompleta;
    dataTexto.classList = "texto-data"

    itemDalista.appendChild(dataTexto);

    listaDeCompras.appendChild(itemDalista);

    
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