const btnAdicionarItem = document.getElementById("adicionar-item");
var iteradorLista = 0;
var date = new Date;
console.log(date.toLocaleString());


btnAdicionarItem.addEventListener("click", (adicionarItem) => {
    adicionarItem.preventDefault();
    var produtoAdicionado = document.getElementById("input-item").value;

    if(produtoAdicionado === ""){
        window.alert("Insira algum valor")
        return
    }
    
    const listaDeCompras = document.getElementById('lista-de-compras')

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

    listaDeCompras.appendChild(itemDalista);

    

    const diaDaSemana = new Date().toLocaleDateString("pt-BR",{ weekday: "long"});
    const data = new Date().toLocaleDateString("pt-BR")

    const DataCompleta = `${diaDaSemana}(${data})`;
    console.log(DataCompleta)
   

})