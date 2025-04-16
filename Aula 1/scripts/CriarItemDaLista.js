export function CriarItemDaLista(){
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

    

    
    const diaDaSemana = new Date().toLocaleDateString("pt-BR",{ weekday: "long"});
    const data = new Date().toLocaleDateString("pt-BR")
    const horaAtutal = new Date().toLocaleTimeString("pt-BR", {
        hour: "numeric",
        minute: "numeric"
    })
    const DataCompleta = `${diaDaSemana} (${data}) às ${horaAtutal}`;

    const dataTexto = document.createElement("p");
    dataTexto.innerText = DataCompleta;
    dataTexto.classList = "texto-data"

    itemDalista.appendChild(dataTexto);

    listaDeCompras.appendChild(itemDalista);
}