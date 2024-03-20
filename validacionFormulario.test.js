// validacionFormulario.test.js

const esFormularioValido = require ('/script'); // Asegúrate de que la ruta al archivo script.js es correcta

describe('esFormularioValido', () => {
    document.body.innerHTML = `
        <form id="testForm">
            <input type="text" required>
            <textarea required></textarea>
        </form>
    `;
    
    const form = document.getElementById('testForm');

    test('debería retornar true para un formulario válido', () => {
        form.querySelector('input').value = 'John Doe'; // Simula entrada de usuario
        form.querySelector('textarea').value = 'Mensaje de prueba';
        expect(esFormularioValido(form)).toBe(true);
    });

    test('debería retornar false para un formulario inválido', () => {
        form.querySelector('input').value = ''; // Simula un campo vacío
        form.querySelector('textarea').value = 'Mensaje de prueba';
        expect(esFormularioValido(form)).toBe(false);
    });
});
