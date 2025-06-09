document.addEventListener("DOMContentLoaded", function () { /* Esto para que aplique apenas el DOM este cargado */

    /* Ocultar mensajes de error */
    let errores = document.querySelectorAll(".error");
    for (let e = 0; e < errores.length; e++) {
        errores[e].style.display = "none";
    }

    document.getElementById("btnSeleccionar").addEventListener("click", function () {
    /* Quitar selección previa */
    const imagenes = document.querySelectorAll(".img-option");
    for (let i = 0; i < imagenes.length; i++) {
        imagenes[i].classList.remove("selected");
        console.log("Removido");
    }

    /* Obtener imagen activa */
    let activa = document.querySelector(".carousel-item.active .img-option");

    if (activa) {
        activa.classList.add("selected");
        document.getElementById("opcionSeleccionada").value = activa.dataset.value;

        console.log("Valor guardado:", service);
    } else {
        console.log("No se encontró imagen activa");
    }
    });

});

function validar () {
    let error;
    let cantErrores = 0;
    let nombre = document.getElementById("name").value.trim();
    let apellido = document.getElementById("lastName").value.trim();
    let email = document.getElementById("email").value.trim();
    let serviceSeleccionado = document.getElementById("opcionSeleccionada").value;
    let tel = document.getElementById("tel").value.trim();
    
    if (nombre.length < 2) {
        error = document.querySelector(".error.nombre"); /* agarra el button con el error */
        mostrarElemento(error); /* lo pasa por parametro al button */
        limpiarInput("name");
        cantErrores++;
    } else {
        error = document.querySelector(".error.nombre"); /* agarra el button con el error*/
        ocultarElemento(error); /* lo pasa por parametro al button */
    }

    if (apellido.length < 2) {
        error = document.querySelector(".error.apellido"); /* agarra el button con el error*/
        mostrarElemento(error); /* lo pasa por parametro al button */
        limpiarInput("lastName");
        cantErrores++;
    } else {
        error = document.querySelector(".error.apellido"); /* agarra el button con el error*/
        ocultarElemento(error); /* lo pasa por parametro al button */
    }

    if (!esEmailValido(email)) {
        error = document.querySelector(".error.email"); /* agarra el button con el error*/
        mostrarElemento(error); /* lo pasa por parametro al button */
        limpiarInput("email");
        cantErrores++;
    } else {
        error = document.querySelector(".error.email"); /* agarra el button con el error*/
        ocultarElemento(error); /* lo pasa por parametro al button */
    }

    if (!serviceSeleccionado) {
        error = document.querySelector(".error.service") /* agarra el button con el error*/
        mostrarElemento(error); /* lo pasa por parametro al button */
        cantErrores++;
    } else {
        error = document.querySelector(".error.service") /* agarra el button con el error*/
        ocultarElemento(error); /* lo pasa por parametro al button */
    }

    if (!esTelefonoValido(tel)) {
        error = document.querySelector(".error.tel"); /* agarra el button con el error*/
        mostrarElemento(error); /* lo pasa por parametro al button */
        limpiarInput("tel");
        cantErrores++;
    } else {
        error = document.querySelector(".error.tel"); /* agarra el button con el error*/
        ocultarElemento(error); /* lo pasa por parametro al button */
    }

    if (cantErrores > 0) {
        return false;
    } else {
        return true;
    }
}

function mostrarElemento (elemento) {
    elemento.style.display = "block";
}

function ocultarElemento (elemento) {
    elemento.style.display = "none";
}

function esEmailValido(email) {
  let regex = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/;
  return regex.test(email.trim());
}

function esTelefonoValido(telefono) { /* Función para validar un número de teléfono */
  let regex = /^\+?\d{8,15}$/;
  return regex.test(telefono.trim());
}

function limpiarInput (id) {
    document.getElementById(id).value = "";
}