let operacion = ""; // Operador actual (+, -, *, /)
let primerNumero = ""; // Primer número ingresado para la operación

// Función para agregar un número al display
function agregarNumero(num) {
    const resultado = document.getElementById('resultado');
    resultado.value += num; // Concatenar el número en el display
}

// Función para limpiar el display y variables
function limpiar() {
    document.getElementById('resultado').value = "";
    primerNumero = "";
    operacion = "";
}

// Función para agregar la operación
function agregarOperacion(op) {
    const resultado = document.getElementById('resultado');
    if (resultado.value !== '') {  
        primerNumero = resultado.value; // Guardar el primer número
        operacion = op; // Guardar la operación seleccionada
        resultado.value = ''; // Limpiar el display para el segundo número
    }
}

// Función para calcular el resultado
function calcularResultado() {
    const segundoNumero = document.getElementById('resultado').value;
    let res;

    if (primerNumero !== '' && segundoNumero !== '') {
        const num1 = parseFloat(primerNumero);
        const num2 = parseFloat(segundoNumero);

        switch (operacion) {
            case '+':
                res = num1 + num2;
                break;
            case '-':
                res = num1 - num2;
                break;
            case '*':
                res = num1 * num2;
                break;
            case '/':
                res = num2 !== 0 ? num1 / num2 : "Error"; // Evitar división por cero
                break;
            default:
                res = "Error";
        }

        document.getElementById('resultado').value = res; // Mostrar el resultado
        primerNumero = ""; // Reiniciar valores
        operacion = "";
    }
}