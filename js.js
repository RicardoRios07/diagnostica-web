function enviarInformacion() {
    // Obtener el valor del nombre ingresado
    var nombre = document.getElementById("nombre").value;

    // Obtener las fechas ingresadas
    var fechaInicio = new Date(document.getElementById("fechaInicio").value);
    var fechaFin = new Date(document.getElementById("fechaFin").value);

    // Obtener la fecha actual
    var fechaActual = new Date();

    // Validar que los campos sean completados
    if (nombre === "" || fechaInicio === "" || fechaFin === "") {
        alert("Por favor, complete todos los campos.");
        return;
    }

    // Validar que las fechas sean válidas
    if (fechaInicio < fechaActual || fechaFin < fechaActual || fechaInicio > fechaFin) {
        alert("Por favor, ingrese fechas válidas.");
        return;
    }

    // Calcular la cantidad de días y noches
    var milisegundosPorDia = 24 * 60 * 60 * 1000;
    var dias = Math.round((fechaFin - fechaInicio) / milisegundosPorDia);
    var noches = dias + 1; // Suponiendo que se cuenta la noche del día de llegada

    // Mostrar el resultado
    var resultado = "Nombre: " + nombre + "<br>";
    resultado += "Fecha de inicio: " + fechaInicio.toDateString() + "<br>";
    resultado += "Fecha de fin: " + fechaFin.toDateString() + "<br>";
    resultado += "Cantidad de días: " + dias + "<br>";
    resultado += "Cantidad de noches: " + noches + "<br>";

    alert("¡La reservación se creó exitosamente!");
    document.getElementById("resultado").innerHTML = resultado;
}