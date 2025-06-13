

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
    let arregloImagenes = [document.getElementById("img1"), document.getElementById("img2"), document.getElementById("img3"), document.getElementById("img4"), document.getElementById("img5")];

    descripcionService.innerHTML="";
    for (let i=0; i < arregloImagenes.length; i++) {
        
        if((arregloImagenes[i].className).includes("active")) {
            switch(arregloImagenes[i].id){
                case "img1":
                    descripcionService.innerHTML="Este es el service 1";
                    break;
                case "img2":
                    descripcionService.innerHTML="Este es el service de 2";
                    break;
                case "img3":
                    descripcionService.innerHTML="Este es el service de 3";
                    break;
                case "img4":
                    descripcionService.innerHTML="Este es el service de 4";
                    break;
                case "img5":
                    descripcionService.innerHTML="Este es el service de 5";
            }
            
        }
    }
    /*

    console.log(serviceSeleccionado);
    switch(serviceSeleccionado){

    }
    */
}