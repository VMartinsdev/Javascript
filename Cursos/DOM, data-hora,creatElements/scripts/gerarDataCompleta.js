function gerarDataCompleta(){
    const diaDaSemana = new Date().toLocaleDateString("pt-BR",{ weekday: "long"});
    const data = new Date().toLocaleDateString("pt-BR")
    const horaAtutal = new Date().toLocaleTimeString("pt-BR", {
        hour: "numeric",
        minute: "numeric"
    })
    const DataCompleta = `${diaDaSemana} (${data}) às ${horaAtutal}`;

    return DataCompleta;
}

export default gerarDataCompleta;