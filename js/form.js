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
    let serviceSeleccionado = document.getElementById("opcionSeleccionada").value.trim();
    let tel = document.getElementById("tel").value.trim();
    let fecha = document.getElementById("fechaService").value;
    
    if (!esFechaValida(fecha)) {
        error = document.querySelector(".error.fecha");
        mostrarElemento(error);
        cantErrores++;
    } else {
        error = document.querySelector(".error.fecha");
        ocultarElemento(error);
    }

    if (!esNombreValido(nombre)) {
        error = document.querySelector(".error.nombre"); /* agarra el button con el error */
        mostrarElemento(error); /* lo pasa por parametro al button */
        limpiarInput("name");
        cantErrores++;
    } else {
        error = document.querySelector(".error.nombre"); /* agarra el button con el error*/
        ocultarElemento(error); /* lo pasa por parametro al button */
    }

    if (!esNombreValido(apellido)) {
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
        error = document.querySelector(".error.service-carrusel") /* agarra el button con el error*/
        mostrarElemento(error); /* lo pasa por parametro al button */
        cantErrores++;
    } else {
        error = document.querySelector(".error.service-carrusel") /* agarra el button con el error*/
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

    if (cantErrores == 0) {
        guardarDatosFormulario(nombre, apellido, email, tel, fecha, serviceSeleccionado);
        return true;
    }
    return false;
}

async function guardarDatosFormulario(nombre, apellido, email, telefono, fecha, service) {
    const formData = {
        "nombre": nombre,
        "apellido": apellido,
        "email": email,
        "telefono": telefono,
        "service": service,
        "fecha": fecha
    };

    try {
        // Cargar datos existentes
        const response = await fetch('events.json');
        let eventos = await response.json();

        // Combinar con localStorage si existe
        /*
        const savedData = localStorage.getItem('calendarEvents');
        
        if (savedData) {
            eventos = {...eventos, ...JSON.parse(savedData)};
        }
        */
        
        // Agregar nuevo turno
        if (!eventos[formData.fecha]) {
            eventos[formData.fecha] = [];
        }

        eventos[formData.fecha].push({
            title: `Turno ${eventos[formData.fecha].length + 1}`,
            cliente: `${formData.nombre} ${formData.apellido}`,
            telefono: formData.telefono,
            email: formData.email,
            service: formData.service
        });

        // Guardar en localStorage
        //localStorage.setItem('calendarEvents', JSON.stringify(eventos));
        // Guardar en el archivo JSON
        

    } catch (error) {
        console.error("Error al guardar datos:", error);
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
  return regex.test(email);
}

function esTelefonoValido(telefono) { /* Función para validar un número de teléfono */
  let regex = /^\+?\d{8,15}$/;
  return regex.test(telefono);
}

function limpiarInput (id) {
    document.getElementById(id).value = "";
}

function esNombreValido (nombre) {
    let regex = /^[a-zA-ZÁÉÍÓÚÑáéíóúñ\s]{2,80}$/;
    return regex.test(nombre);
}

function esFechaValida(fecha) {
    const regex = /^(0[1-9]|[12][0-9]|3[01])[\/\-](0[1-9]|1[0-2])[\/\-]\d{4}$/;
    return regex.test(fecha.trim());
}