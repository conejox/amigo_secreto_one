# Amigo Secreto

Esta es una aplicación web simple para organizar un sorteo de "Amigo Secreto". Permite agregar nombres a una lista y luego sortear un nombre aleatorio de la lista para asignar un amigo secreto.

## Funcionalidades

1. **Agregar Amigo**: Permite agregar nombres a una lista.
2. **Sortear Amigo**: Selecciona un nombre aleatorio de la lista y lo muestra como el "Amigo Secreto".

## Cómo Funciona

### HTML

El archivo HTML (`index.html`) contiene la estructura básica de la página, incluyendo:
- Un campo de entrada para agregar nombres.
- Un botón para agregar nombres a la lista.
- Un botón para sortear un amigo secreto.
- Listas para mostrar los nombres agregados y el resultado del sorteo.

### JavaScript

El archivo JavaScript (`app.js`) maneja la lógica de la aplicación. Aquí hay una explicación básica del código:

1. **Variables Globales**:
    ```javascript
    const input = document.getElementById('amigo');
    const listaAmigos = document.getElementById('listaAmigos');
    const resultado = document.getElementById('resultado');
    let amigos = [];
    ```
    - [input](http://_vscodecontentref_/0): Referencia al campo de entrada donde se escriben los nombres.
    - [listaAmigos](http://_vscodecontentref_/1): Referencia a la lista donde se mostrarán los nombres agregados.
    - [resultado](http://_vscodecontentref_/2): Referencia a la lista donde se mostrará el resultado del sorteo.
    - [amigos](http://_vscodecontentref_/3): Array que almacena los nombres de los participantes.

2. **Función [agregarAmigo](http://_vscodecontentref_/4)**:
    ```javascript
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
    ```
    - Obtiene el nombre del campo de entrada y lo agrega a la lista si no está vacío y no está ya en la lista.
    - Muestra una alerta si el nombre está vacío o ya está en la lista.

3. **Función [sortearAmigo](http://_vscodecontentref_/5)**:
    ```javascript
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
    ```
    - Verifica que haya al menos dos nombres en la lista antes de realizar el sorteo.
    - Selecciona un nombre aleatorio de la lista y lo muestra como el "Amigo Secreto".

## Cómo Usar

1. Abre el archivo `index.html` en un navegador web.
2. Escribe un nombre en el campo de entrada y haz clic en "Añadir".
3. Repite el paso 2 para agregar más nombres.
4. Haz clic en "Sortear amigo" para ver el nombre del "Amigo Secreto".

¡Disfruta organizando tu sorteo de Amigo Secreto!
