
let hoy = new Date().valueOf();
let timestampMes = "2585600000";

document.addEventListener("DOMContentLoaded", async function() {
    
    
    const { fechasBloqueadas } = await cargarFechasBloqueadas();

    flatpickr("#fechaService", {
        locale: "es",
        minDate: "today",
        disable: [
            function(date) {
                return date.getDay() === 0 || fechasBloqueadas.includes(formatearFecha(date)) || date.valueOf() === hoy || (date.valueOf()-hoy) >= timestampMes*2;
            }
        ],
        dateFormat: "Y-m-d",
    });
});

async function cargarFechasBloqueadas() {
    try {
        const response = await fetch('events.json');
        const jsonService = await response.json();

        // Combinar con localStorage
        const savedData = localStorage.getItem('calendarEvents');
        const eventos = savedData ? {...jsonService, ...JSON.parse(savedData)} : jsonService;

        // Procesar fechas bloqueadas (3+ eventos)
        const fechasBloqueadas = Object.keys(eventos)
            .filter(fecha => eventos[fecha].length >= 3);
        return { fechasBloqueadas };
    } catch (error) {
        console.error("Error:", error);
        return { fechasBloqueadas: [] };
    }
}

function formatearFecha(date) {
    return date.toISOString().split('T')[0];
}