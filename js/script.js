
mostrarInfo();

function mostrarInfo() {
    let descripcionService=document.getElementById('descripcionService');
    let arregloImagenes = [document.getElementById("img1"), document.getElementById("img2"), document.getElementById("img3"), document.getElementById("img4"), document.getElementById("img5")];

    descripcionService.innerHTML="";
    for (let i=0; i < arregloImagenes.length; i++) {
        
        if((arregloImagenes[i].className).includes("active")) {
            switch(arregloImagenes[i].id){
                case "img1":
                    descripcionService.innerHTML = `
                        <h2 class="tituloService">PACK-SERVICE RUTINA</h2>
                        <p>
                            Este service pack está recomendado para el mantenimiento óptimo de bicicletas con un uso básico. Sugerimos realizarlo después de <b>35 horas de uso</b> rutinario o, en su defecto, tras un periodo de <b>1 a 2 meses</b> de uso <b>casual</b>, según lo que ocurra <u>primero</u>. <br><br>
                            <ul style="text-align: left;">
                                <li>Limpieza general de la bicicleta, transmisión y lubricación.</li>
                                <li>Medición de desgaste de cadena.</li>
                                <li>Apriete de cassette de piñones.</li>
                                <li>Comprobación de cables de transmisión y frenos.</li>
                                <li>Comprobación de fundas/ductos de transmisión y frenos.</li>
                                <li>Ajuste de cambio trasero y delantero</li>
                                <li>Medición de desgaste de discos de freno y centrado de los mismos</li>
                                <li>Ajuste y revisión de pastillas/tacos de freno</li>
                                <li>Comprobación de cubiertas (presión/estado)</li>
                                <li>Ajuste de tornillería completa</li>
                                <li>Ajuste de juego de dirección/holgura</li>
                            </ul>
                        </p><br>
                    `;
                    break;
                case "img2":
                    descripcionService.innerHTML = `
                        <h2 class="tituloService">PACK-SERVICE ESTÁNDAR</h2>
                        <p>
                            Este service pack está diseñado para bicicletas con un uso periódico no casual. Incluye <b>limpieza</b> de rodamientos y partes móviles con una <b><u>máquina de ultrasonido</u></b>, asegurando un mantenimiento más profundo y prolongando la vida útil de sus componentes.  Recomendamos realizarlo después de <b>75-100 horas de uso</b> o, en su defecto, cada <b>3 meses</b>, según lo que ocurra <u>primero</u>.<br><br>
                            <ul style="text-align: left;">
                                <li>Limpieza general de la bicicleta, transmisión y lubricación.</li>
                                <li>Medición de desgaste de cadena.</li>
                                <li>Apriete de cassette de piñones.</li>
                                <li>Comprobación de cables de transmisión y frenos.</li>
                                <li>Comprobación de fundas/ductos de transmisión y frenos.</li>
                                <li>Mantenimiento de caja pedalera</li>
                                <li>Mantenimiento de juego de dirección</li>
                                <li>Ajuste de cambio trasero y delantero</li>
                                <li>Medición de desgaste de discos de freno y centrado de los mismos</li>
                                <li>Ajuste y revisión de pastillas/tacos de freno</li>
                                <li>Comprobación de cubiertas (presión/estado)</li>
                                <li>Ajuste de tornillería completa</li>
                                <li>Ajuste de juego de dirección/holgura</li>
                            </ul>
                        </p><br>
                    `; 
                    break;
                case "img3":
                    descripcionService.innerHTML = `
                        <h2 class="tituloService">PACK-SERVICE PREMIUM</h2>
                        <p>
                            Este service pack premium está diseñado para un mantenimiento completo de la bicicleta, abarcando todos los aspectos de la misma. Incluye <b>limpieza</b> de rodamientos y partes móviles con una máquina de <b><u>ultrasonido</u></b>, asegurando un mantenimiento más profundo y prolongando la vida útil de sus componentes.  Recomendamos realizarlo después de <b>150 horas de uso</b> o, en su defecto, cada <b>4 meses</b>, según lo que ocurra <u>primero</u>.<br><br>
                            <ul style="text-align: left;">
                                <li>Limpieza general de la bicicleta, transmisión y lubricación.</li>
                                <li>Medición de desgaste de cadena.</li>
                                <li>Apriete de cassette de piñones.</li>
                                <li>Comprobación de cables de transmisión y frenos.</li>
                                <li>Comprobación de fundas/ductos de transmisión y frenos.</li>
                                <li>Mantenimiento de caja pedalera</li>
                                <li>Mantenimiento de juego de dirección</li>
                                <li>Ajuste de cambio trasero y delantero</li>
                                <li>Mantenimiento de mazas</li>
                                <li>Mantenimiento de body trasero</li>
                                <li>Medición de desgaste de discos de freno y centrado de los mismos</li>
                                <li>Ajuste y revisión de pastillas/tacos de freno</li>
                                <li>Comprobación de cubiertas (presión/estado)</li>
                                <li>Ajuste de tornillería completa</li>
                                <li>Ajuste de juego de dirección/holgura</li>
                            </ul>
                        </p><br>
                    `;
                    break;
                case "img4":
                    descripcionService.innerHTML = `
                        <h2 class="tituloService">PACK-SERVICE FRENOS V1</h2>
                        <p>
                            Este service para frenos hidráulicos está recomendado para mantener un <b>rendimiento óptimo</b> y seguro del sistema de frenado. Sugerimos realizarlo cada <b>3 a 5 meses</b>, dependiendo del tipo de uso y las exigencias del ciclista, ya sea un uso <u>normal</u> o <u>intensivo</u>.<br><br>
                            <ul style="text-align: left;">
                                <li>Medición de desgaste de discos de freno</li>
                                <li>Ajuste y revisión de pastillas de freno</li>
                                <li>Compensación de pistones</li>
                                <li>Purgado de frenos completo</li>
                                <li>Centrado de discos de freno</li>
                            </ul>
                        </p><br>
                    `;
                    break;
                case "img5":
                    descripcionService.innerHTML = `
                        <h2 class="tituloService">PACK-SERVICE FRENOS V2</h2>
                        <p>
                            Este service para frenos hidráulicos incluye un <b><u>despiece completo</u></b> y un mantenimiento al detalle de todo el sistema de frenado, garantizando su óptimo rendimiento y seguridad. Está recomendado para <b>todo tipo de usuarios</b>, y es fundamental realizarlo al menos <b><u>una vez al año</b></u> para asegurar el correcto funcionamiento del circuito, prevenir desgastes prematuros y evitar posibles fallos en el sistema.<br><br>
                            <ul style="text-align: left;">
                                <li>Medición de desgaste de discos de freno</li>
                                <li>Ajuste y revisión de pastillas de freno</li>
                                <li>Despiece y mantenimiento completo de manijas de freno</li>
                                <li>Despiece y mantenimiento completo de calipers de freno</li>
                                <li>Compensación de pistones</li>
                                <li>Purgado de frenos completo</li>
                                <li>Centrado de discos de freno</li>
                            </ul>
                        </p><br>
                    `;
            }
            
        }
    }
}

function validarContacto () {
    let nombre = document.getElementById("nombre").value.trim();
    let correo = document.getElementById("email").value.trim();
    let cantErrores = 0;

    if (!esNombreValido(nombre)) {
        cantErrores++;
        let error = document.querySelector(".error-box.nombre");
        mostrarElemento(error);
    } else {
        let error = document.querySelector(".error-box.nombre");
        ocultarElemento(error);
    }

    if (!esEmailValido(correo)) {
        cantErrores ++;
        let error = document.querySelector(".error-box.email");
        mostrarElemento(error);
    } else {
        let error = document.querySelector(".error-box.email");
        ocultarElemento(error);
    }
    
    if (cantErrores != 0) {
        return false;
    } else {
        return true;
    }
}

function esEmailValido(email) {
  let regex = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/;
  return regex.test(email);
}

function mostrarElemento (elemento) {
    elemento.style.display = "block";
}

function ocultarElemento (elemento) {
    elemento.style.display = "none";
}

function esNombreValido (nombre) {
    let regex = /^[a-zA-ZÁÉÍÓÚÑáéíóúñ\s]{2,80}$/;
    return regex.test(nombre);
}