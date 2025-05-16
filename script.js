function buscarDestinos() {
  const input = document.getElementById("busqueda").value.toLowerCase();
  const contenedor = document.getElementById("resultados");
  contenedor.innerHTML = "";

  fetch("destinos.json")
    .then(response => response.json())
    .then(destinos => {
      const filtrados = destinos.filter(destino =>
        destino.nombre.toLowerCase().includes(input) ||
        destino.descripcion.toLowerCase().includes(input)
      );

      if (filtrados.length === 0) {
        contenedor.innerHTML = "<p>No se encontraron destinos.</p>";
      } else {
        filtrados.forEach(destino => {
          const div = document.createElement("div");
          div.className = "destino";

          div.innerHTML = `
            <img src="${destino.imagen}" alt="${destino.nombre}">
            <h3>${destino.nombre}</h3>
            <p>${destino.descripcion}</p>
          `;

          contenedor.appendChild(div);
        });
      }
    })
    .catch(error => {
      console.error("Error al cargar destinos:", error);
      contenedor.innerHTML = "<p>Error al cargar los destinos.</p>";
    });
}
