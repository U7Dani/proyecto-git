// Definición de la función esFormularioValido
function esFormularioValido(form) {
    // Verifica si todos los campos requeridos están llenos.
    return Array.from(form.querySelectorAll('input[required], textarea[required]')).every(input => input.value.trim() !== '');
}

// Añadir el evento de escucha al contenido del DOM
document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('contactForm');
    if (form) { // Asegura que el formulario exista para evitar errores
        form.addEventListener('submit', function(event) {
            let fieldsAreValid = esFormularioValido(form); // Usa la función de validación aquí
            
            if (!fieldsAreValid) {
                event.preventDefault(); // Evita que el formulario se envíe si es inválido
                alert('Por favor, completa todos los campos requeridos.');
            }
        });
    }
});

// Añade un chequeo para ver si estamos en un entorno que soporta module.exports (como Node.js)
// Esto permite usar la misma pieza de código en el navegador y en un entorno de pruebas unitarias.
if (typeof module !== 'undefined' && module.exports) {
    module.exports = esFormularioValido; // Exporta la función para su uso en pruebas unitarias
}
