const input = document.getElementById('amigo');
const listaAmigos = document.getElementById('listaAmigos');
const resultado = document.getElementById('resultado');

// aqui se almacenan la lista de amigos
let amigos = [];

function agregarAmigo() {
    const nombre = input.value.trim();
    if (!nombre) {
        alert('El nombre no puede estar vacío.');
        return;
    }
    if (!amigos.includes(nombre)) {
        amigos.push(nombre);
        const li = document.createElement('li');
        li.textContent = nombre;
        listaAmigos.appendChild(li);
        input.value = '';
    } else {
        alert('El nombre ya está en la lista.');
    }
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert('Agrega al menos dos nombres para sortear.');
        return;
    }

    const randomIndex = Math.floor(Math.random() * amigos.length);
    const amigoSecreto = amigos[randomIndex];

    resultado.innerHTML = '';
    const li = document.createElement('li');
    li.textContent = `Tu amigo secreto es: ${amigoSecreto}`;
    resultado.appendChild(li);
}