const formulario = document.getElementById('form-contacto');
const mensajeExito = document.getElementById('mensaje-exito');

formulario.addEventListener('submit', (e) => {
  // prevenir la recarga de la página
  e.preventDefault();

  // reiniciar estado (oculta errores previos y limpia mensaje de exito)
  mensajeExito.textContent = '';
  document.querySelectorAll('.campo-error').forEach(campo => campo.classList.remove('campo-error'));
  document.querySelectorAll('.error-msg').forEach(msg => msg.style.display = 'none');

  let formularioValido = true;

  // valida nombre
  const nombre = document.getElementById('nombre');
  if (nombre.value.trim() === '') {
    mostrarError(nombre, 'error-nombre');
    formularioValido = false;
  }

  // validar correo
  const correo = document.getElementById('correo');
  const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!regexCorreo.test(correo.value.trim())) {
    mostrarError(correo, 'error-correo');
    formularioValido = false;
  }

  // validar motivo
  const motivo = document.getElementById('motivo');
  if (motivo.value === '') {
    mostrarError(motivo, 'error-motivo');
    formularioValido = false;
  }

  // validar mensaje
  const mensaje = document.getElementById('mensaje');
  if (mensaje.value.trim() === '') {
    mostrarError(mensaje, 'error-mensaje');
    formularioValido = false;
  }

  // si es valido, mostrar exito y limpiar formulario
  if (formularioValido) {
    mensajeExito.textContent = '¡Gracias! Tu consulta ha sido enviada con éxito. Te contactaremos pronto.';
    formulario.reset();
  }
});

// función para marcar campos invalidos y mostrar el mensaje correspondiente
function mostrarError(campo, idMensaje) {
  campo.classList.add('campo-error');
  document.getElementById(idMensaje).style.display = 'block';
}