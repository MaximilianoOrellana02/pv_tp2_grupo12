let nombres = ["Ana", "Juan", "Maria", "Nacho", "Guari", "Mateo", "Federico"];

let nombreMasLargo = "";

for(let i = 0; i < nombres.length; i++) {
    if(nombres[i].length > nombreMasLargo.length)
        nombreMasLargo = nombres[i];
}

console.log("Nombre mas largo: " + nombreMasLargo);

