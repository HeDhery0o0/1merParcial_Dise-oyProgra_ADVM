
const formulario = document.getElementById("formulario");
const usuario = document.getElementById("usuario");
const contrasena = document.getElementById("contrasena");
const mensaje = document.getElementById("mensaje");
const datos = document.getElementById("datos");

formulario.addEventListener("submit", function(evento) {
    evento.preventDefault();

    const nombre = usuario.value.trim();
    const clave = contrasena.value;

    if (nombre === "" || clave === "") {
        mensaje.textContent = "Completa todos los campos.";
        mensaje.className = "error";
        return;
    }

    localStorage.setItem("usuarioGuardado", nombre);
    localStorage.setItem("contrasenaGuardada", clave);

    mensaje.textContent = "¡Datos guardados correctamente!";
    mensaje.className = "exito";
    datos.textContent = "";
});

document.getElementById("mostrar").addEventListener("click", function() {
    const nombre = localStorage.getItem("usuarioGuardado");
    const clave = localStorage.getItem("contrasenaGuardada");

    if (nombre === null || clave === null) {
        mensaje.textContent = "No hay datos guardados.";
        mensaje.className = "error";
        datos.textContent = "";
        return;
    }

    mensaje.textContent = "Datos guardados:";
    mensaje.className = "exito";

    datos.replaceChildren();

    const usuarioGuardado = document.createElement("p");
    usuarioGuardado.textContent = "Usuario: " + nombre;

    const contrasenaGuardada = document.createElement("p");
    contrasenaGuardada.textContent = "Contraseña: " + clave;

    datos.append(usuarioGuardado, contrasenaGuardada);
});

document.getElementById("borrar").addEventListener("click", function() {
    localStorage.removeItem("usuarioGuardado");
    localStorage.removeItem("contrasenaGuardada");

    mensaje.textContent = "Datos borrados correctamente.";
    mensaje.className = "exito";
    datos.textContent = "";
});
