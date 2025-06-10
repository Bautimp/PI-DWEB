
document.addEventListener("DOMContentLoaded", async function() {
    const { fechasBloqueadas } = await cargarFechasBloqueadas();

    flatpickr("#fechaService", {
        locale: "es",
        minDate: "today",
        disable: [
            function(date) {
                return date.getDay() === 0 || fechasBloqueadas.includes(formatearFecha(date));
            }
        ],
        dateFormat: "Y-m-d",
        onReady: function() {
            // Aplicar estilos personalizados
            document.querySelectorAll('.flatpickr-month, .flatpickr-weekday, .flatpickr-day')
                .forEach(el => el.style.color = 'white');

            // Días deshabilitados en rojo
            document.querySelectorAll('.flatpickr-day.disabled')
                .forEach(el => el.style.color = 'red');
        },
        onChange: function() {
            // Reaplicar estilos cuando cambia el mes
            document.querySelectorAll('.flatpickr-day.disabled')
                .forEach(el => el.style.color = 'red');
        }
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