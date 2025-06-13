

const cargarArchivo = () => {
    let fechas = [];
    fetch('datos.json')
        .then(res => res.json())
        .then(res => {
                res.forEach(fecha => {
                    fechas.push(new Date(fecha));
                });
            }
        )


}

function mostrarInfo() {
    let descripcionService=document.getElementById('descripcionService');
    let serviceSeleccionado=document.getElementById('carouselServices');
    let arregloImagenes = [document.getElementById("img1"), document.getElementById("img2"), document.getElementById("img3"), document.getElementById("img4"), document.getElementById("img5")];

    for (let i=0; i < arregloImagenes.length; i++) {
        console.log(arregloImagenes[i].className);
        if((arregloImagenes[i].className).includes("active")) {
            
            console.log(arregloImagenes[i].value);

            switch(arregloImagenes[i].value){
                case 1:
                    descripcionService.innerHTML="Este es el service de rutina";
                    break;
                case 2:
                    descripcionService.innerHTML="Este el service de estandar";
            }
        }
    }
    /*

    console.log(serviceSeleccionado);
    switch(serviceSeleccionado){

    }
    */
}