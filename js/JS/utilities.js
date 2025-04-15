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
