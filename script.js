// Función para crear el fondo de cielo estrellado y cometas
function crearCieloEstrellado() {
    // Crear un contenedor para las estrellas si no existe
    const starsContainer = document.createElement('div');
    starsContainer.id = 'stars-container';
    document.body.appendChild(starsContainer);

    // Cantidad de estrellas
    const numeroEstrellas = 100;

    for (let i = 0; i < numeroEstrellas; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        
        // Posición aleatoria
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;
        
        // Tamaño aleatorio (estrellas pequeñas y algunas más grandes)
        const size = Math.random() * 3;
        
        star.style.left = ${x}px;
        star.style.top = ${y}px;
        star.style.width = ${size}px;
        star.style.height = ${size}px;
        
        // Retraso de parpadeo aleatorio
        star.style.animationDelay = ${Math.random() * 3}s;
        
        starsContainer.appendChild(star);
    }

    // Crear un par de cometas que cruzan el cielo
    for (let j = 0; j < 2; j++) {
        const comet = document.createElement('div');
        comet.classList.add('comet');
        comet.style.top = ${Math.random() * -500}px;
        comet.style.left = ${Math.random() * -500}px;
        comet.style.animationDuration = ${3 + Math.random() * 4}s;
        comet.style.animationDelay = ${Math.random() * 5}s;
        starsContainer.appendChild(comet);
    }
}

// Ejecutar la función al cargar la página
window.addEventListener('DOMContentLoaded', crearCieloEstrellado);

// Función de búsqueda existente
function filtrarContenido() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const secciones = document.querySelectorAll('.searchable');

    secciones.forEach(seccion => {
        const textoSeccion = seccion.textContent.toLowerCase();
        if (textoSeccion.includes(input)) {
            seccion.style.display = 'block';
        } else {
            seccion.style.display = 'none';
        }
    });
}