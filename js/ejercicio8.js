let calcularMayor = (numero1, numero2) =>  {
    if(numero1 > numero2)
        console.log(numero1 + " es mayor");
    else if (numero2 > numero1)
        console.log(numero2 + " es mayor");
    else
        console.log("Son iguales");
}

calcularMayor(6, 4);
calcularMayor(7, 9);
calcularMayor(5, 5);