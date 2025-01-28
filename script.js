function filtrarContenido(filtro) {
    const items = document.querySelectorAll("#contenido .item");

    items.forEach(item => {
        const tipo = item.getAttribute("data-tipo");
        const fecha = item.getAttribute("data-fecha");

        // Mostrar todos los elementos si el filtro es "Todas"
        if (filtro === "Todas" ||
            (filtro === "Reciente" && fecha >= "2025-01-23") ||
            (filtro === "Antiguo" && fecha < "2025-01-22") ||
            (filtro === tipo)) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    });
}
// Seleccionar elementos
const modal = document.getElementById("modal");
const modalImg = document.getElementById("img-grande");
const closeModal = document.querySelector(".close");
const loader = document.querySelector(".loader");

// Abrir modal al hacer clic en la imagen
document.querySelectorAll("#contenido .item img").forEach((img) => {
    img.addEventListener("click", () => {
        const imagenGrande = img.getAttribute("data-imagen-grande");
        modal.style.display = "flex"; // Mostrar modal
        loader.style.display = "block"; // Mostrar loader
        modalImg.style.display = "none"; // Ocultar imagen mientras carga

        // Cargar la imagen de mayor calidad
        modalImg.src = imagenGrande;
        modalImg.onload = () => {
            loader.style.display = "none"; // Ocultar loader
            modalImg.style.display = "block"; // Mostrar imagen
        };
    });
});

// Cerrar el modal
closeModal.addEventListener("click", () => {
    modal.style.display = "none";
    modalImg.src = ""; // Limpiar la imagen para evitar errores
});

// Cerrar el modal al hacer clic fuera de la imagen
modal.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
        modalImg.src = ""; // Limpiar la imagen
    }
});

  // Cargar la música
  const audio = new Audio("Welcome-To-Jamrock.mp3"); // Cambia "ruta_de_tu_musica.mp3" por el archivo de tu música.

  // Seleccionar botones
  const playButton = document.querySelector(".Play");
  const pauseButton = document.querySelector(".Pause");

  // Evento para el botón de reproducir
  playButton.addEventListener("click", () => {
    audio.play(); // Reproducir la música
    playButton.style.display = "none"; // Ocultar el botón de reproducir
    pauseButton.style.display = "inline-block"; // Mostrar el botón de pausar
  });

  // Evento para el botón de pausar
  pauseButton.addEventListener("click", () => {
    audio.pause(); // Pausar la música
    pauseButton.style.display = "none"; // Ocultar el botón de pausar
    playButton.style.display = "inline-block"; // Mostrar el botón de reproducir
  });
