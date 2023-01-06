function calculo(monto, cuotas) {
    let intereses;
    if (cuotas == 3) {
        intereses = monto * 0.20;
        return intereses
    }
    else if (cuotas == 6) {
        intereses = monto * 0.30;
        return intereses
    }
    else if (cuotas == 12) {
        intereses = monto * 0.45;
        return intereses
    }
    else if (cuotas == 18) {
        intereses = monto * 0.50;
        return intereses
    }
    else {
        console.log("Cuotas incorrectas");
    }
}

alert("Bienvenido al simulador de prestamos online");

let monto = parseInt(prompt("Ingrese el monto que quiere solicitar\n\n Monto minimo a solicitar es de: 50000"));

while (monto < 50000) {
alert ("el monto " + monto + "$ es menor al permitido")

monto = prompt ("Ingrese un nuevo monto")
}

let cuotas = parseInt(prompt("Seleccione la cantidad de cuotas 3-6-12-18"));
console.log("Solicitaste:", monto, "$");
console.log("En:", cuotas, "cuotas");
console.log("El total de intereses a pagar es de:", calculo(monto, cuotas), "$");
console.log("El monto total a pagar es:", calculo(monto, cuotas) + monto, "$");