function openCity(cityName, elmnt, color) {
    // Oculta todas las pestañas
    var tabcontent = document.getElementsByClassName("tabcontent");
    for (var i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Muestra la pestaña seleccionada
    document.getElementById(cityName).style.display = "flex";

    // Elimina el color de fondo de todos los botones
    var tablinks = document.getElementsByClassName("tablink");
    for (var i = 0; i < tablinks.length; i++) {
        tablinks[i].style.backgroundColor = "";
    }

    // Cambia el color del botón activo (opcional)
    elmnt.style.backgroundColor = color;
}

// Activa la pestaña por defecto
document.getElementById("defaultOpen").click();
