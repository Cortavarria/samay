document.addEventListener('DOMContentLoaded', function() {
    const email = document.getElementById('email');
    const telefono = document.getElementById('telefono');
    const localidad = document.getElementById('localidad');
    const submitBtn = document.getElementById('submit-btn');

    submitBtn.addEventListener('click', function(event) {
        event.preventDefault();

        if (!validarEmail(email.value)) {
            Swal.fire({
                icon: 'error',
                title: 'Correo no válido',
                text: 'Por favor, ingrese un correo electrónico válido.'
            });
            return;
        }

        if (!validarTelefono(telefono.value)) {
            Swal.fire({
                icon: 'error',
                title: 'Teléfono no válido',
                text: 'Por favor, ingrese un número de teléfono válido.'
            });
            return;
        }

        if (!validarLocalidad(localidad.value)) {
            Swal.fire({
                icon: 'error',
                title: 'Localidad no válida',
                text: 'Por favor, ingrese una localidad válida'
            });
            return;
        }

        Swal.fire({
            icon: 'success',
            title: 'Enviado con éxito',
            text: 'El formulario se ha enviado correctamente.',
        })
    });

    function validarEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

    function validarTelefono(telefono) {
        const regex = /^(3\d{9}|60\d{8})$/;
        return regex.test(telefono);
    }

    function validarLocalidad(localidad) {
        const localidades = [
            'usaquén', 'chapinero', 'santa Fe', 'san Cristóbal', 'usme', 'tunjuelito', 'bosa', 'kennedy', 
            'fontibón', 'engativá', 'suba', 'barrios unidos', 'teusaquillo', 'los mártires', 'antonio nariño', 
            'puente aranda', 'la candelaria', 'rafael uribe uribe', 'ciudad bolívar', 'sumapaz'
        ];
        return localidades.includes(localidad.toLowerCase());
    }

})