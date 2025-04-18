//Ejercicio 18
export let cambiarTexto = () => {
    let parrafo = document.getElementById("texto");
    parrafo.textContent = "Texto cambiado";
}
//Ejercicio 19
export let mostrarDatos = () => {
    const nombre = document.querySelector("#nombre").value;
    const apellido = document.querySelector("#apellido").value;
    const lu = document.querySelector("#lu").value;

    alert(`Los datos ingresados son: \nNombre: ${nombre}\nAPellido: ${apellido}\nLibreta Unviersitaria: ${lu}`);
}

//Ejercicio 20

export const paisesCapitales = {
    "Argentina": "Buenos Aires",
    "Brasil": "Brasilia", 
    "Chile": "Santiago",
    "Colombia": "Bogota", 
    "Mexico": "Ciudad de Mexico",
    "Peru": "Lima"
};

export let actualizarCapital = () => {
    let paisSeleccionado = document.getElementById("pais").value;
    let capitalSeleccionada = document.getElementById("capital");

    capitalSeleccionada.value = paisesCapitales[paisSeleccionado];

    console.log(`Pais seleccionado: ${paisSeleccionado}, Capital Seleccionada: ${capitalSeleccionada}`);
    
}

//Ejercicio 21
export let clonarTexto = () => {
    document.getElementById("texto").addEventListener("input", function() {
        document.getElementById("textoOutput").textContent = this.value;
    });
}

//Ejercicio 22
export let clonarText = () => {
    document.getElementById("texto").addEventListener("input", function() {
        document.getElementById("textoOutput").textContent = this.value;


        if(document.getElementById("textoOutput").textContent.length > 20) {
            textoOutput.style.backgroundColor = "#ffcccc"; // Color de fondo rojo claro
        } else {
            textoOutput.style.backgroundColor = "transparent"; // Fondo normal
        }


    });
}

//Ejercicio 23

export let actualizarTexto = () => {
    document.getElementById("opciones").addEventListener("change", function(event) {
        if (event.target.name === "lenguaje") {
            const seleccionado = event.target.value;
            document.getElementById("resultado").textContent = `Has seleccionado: ${seleccionado}`;
            console.log(`Lenguaje seleccionado: ${seleccionado}`);
        }
    });

}

//Ejercicio 24
export let cambiarColorFondo = () => {
    const colores = ["#ffcccb", "#d4edda", "#cce5ff", "#f9e79f", "#e8daef"];
    const colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
    
    document.body.style.backgroundColor = colorAleatorio;
    console.log(`Color cambiado a: ${colorAleatorio}`);
}
