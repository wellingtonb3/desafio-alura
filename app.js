let amigos = [];

function adicionarAmigo() {
    const nomeAmigo = document.getElementById("amigo").value;

    if (nomeAmigo.trim() === "") {
        alert("Por favor, insira um nome.");
        return;
    }

    amigos.push(nomeAmigo);
    exibirLista();
    document.getElementById("amigo").value = "";
}

function exibirLista() {
    const listaElement = document.getElementById("listaAmigos");
    listaElement.innerHTML = "";

    amigos.forEach((amigo, index) => {
        const listItem = document.createElement("li");
        listItem.textContent = amigo;
        listaElement.appendChild(listItem);
    });
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Adicione pelo menos um nome antes de sortear.");
        return;
    }

    const indiceSorteado = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceSorteado];
    const resultadoElement = document.getElementById("resultado");

    resultadoElement.innerHTML = "";
    const resultadoItem = document.createElement("li");
    resultadoItem.textContent = `O amigo sorteado é: ${amigoSorteado}`;
    resultadoElement.appendChild(resultadoItem);
}
