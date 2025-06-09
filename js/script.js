

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