const moto = 100
const auto = 200
const camion = 1000

let cantidad;
let modelo;
let resultado;

function Funsa(Hola) {
    Function
}



function multiplicar(valor1, valor2) {
    const resultado = valor1 * valor2;
    return resultado;
}

while (cantidad != 0) {
    cantidad = parseInt(prompt("Cantidad de Cubiertas, recuerde que 0 cero, termina la carga"));

    if (cantidad === 0) {
        break;
    }

    modelo = prompt("Ingrese el modelo de cubierta que desee:\n\ -Si quiere cubierta de moto ingrese = moto \n\ -Si quiere cubierta de auto ingrese = auto \n\ -Si quiere cubierta de camion ingrese = camion");

    switch (modelo) {
        case "moto":
            resultado = multiplicar(moto, cantidad);
            alert("Debe abonar $ " + resultado + " por su compra de cubierta de moto");
            break;
        case "auto":
            resultado = multiplicar(auto, cantidad);
            alert("Debe abonar $ " + resultado + " por su compra cubierta de auto");
            break;
        case "camion":
            resultado = multiplicar(alimentoC, cantidad);
            alert("Debe abonar $ " + resultado + " por su compra de cuebierta camion");
            break;
        default:
            alert("Operacion Invalida");
            break;
    }

    if (cantidad >= 10) {
        valorEnvio = 0
        alert("Su costo de envio es $" + valorEnvio);
    }
    else if (cantidad >= 5) {
        valorEnvio = 100
        alert("Su costo de envio es $" + valorEnvio);
    }
    else {
        valorEnvio = 200
        alert("Su costo de envio es $" + valorEnvio);
    }
}