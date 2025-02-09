let amigos = []; // Array para almacenar los nombres de los amigos


function agregarAmigo() {
    const amigoInput = document.getElementById("amigo");
    const amigoNombre = amigoInput.value.trim();

    if (amigoNombre === "") {
        alert("Por favor, ingresa un nombre.");
        return;
    }
    amigos.push(amigoNombre);
    amigoInput.value = "";

    mostrarListaAmigos();
}


function mostrarListaAmigos() {
    const listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = ""; // Limpiar la lista antes de actualizarla

    amigos.forEach(amigo => {
        const li = document.createElement("li");
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}


function sortearAmigo() {
    if (amigos.length === 0) {
        document.getElementById("resultado").innerHTML = "No hay amigos disponibles para sortear.";
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];

  
    document.getElementById("resultado").innerHTML = `El amigo sorteado es: ${amigoSorteado}`;
}