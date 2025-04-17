document.getElementById("texto").addEventListener("input", function() {
    document.getElementById("textoOutput").textContent = this.value;
});