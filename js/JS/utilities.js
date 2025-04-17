//Ejercicio 18
export function cambiarTexto() {
    let parrafo = document.getElementById("texto");
    parrafo.textContent = "Texto cambiado";
}
//Ejercicio 19
export function mostrarDatos() {
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

export function actualizarCapital() {
    let paisSeleccionado = document.getElementById("pais").value;
    let capitalSeleccionada = document.getElementById("capital");

    capitalSeleccionada.value = paisesCapitales[paisSeleccionado];

    console.log(`Pais seleccionado: ${paisSeleccionado}, Capital Seleccionada: ${capitalSeleccionada}`);
    
}

//Ejercicio 23

export function actualizarTexto() {
    document.getElementById("opciones").addEventListener("change", function(event) {
        if (event.target.name === "lenguaje") {
            const seleccionado = event.target.value;
            document.getElementById("resultado").textContent = `Has seleccionado: ${seleccionado}`;
            console.log(`Lenguaje seleccionado: ${seleccionado}`);
        }
    });

}

//Ejercicio 24
export function cambiarColorFondo() {
    const colores = ["#ffcccb", "#d4edda", "#cce5ff", "#f9e79f", "#e8daef"];
    const colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
    
    document.body.style.backgroundColor = colorAleatorio;
    console.log(`Color cambiado a: ${colorAleatorio}`);
}
