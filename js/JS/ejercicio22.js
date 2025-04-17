document.getElementById("texto").addEventListener("input", function() {
    document.getElementById("textoOutput").textContent = this.value;


    if(document.getElementById("textoOutput").textContent.length > 20) {
        textoOutput.style.backgroundColor = "#ffcccc"; // Color de fondo rojo claro
    } else {
        textoOutput.style.backgroundColor = "transparent"; // Fondo normal
    }

    
});