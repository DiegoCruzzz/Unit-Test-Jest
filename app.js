// Esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}

// Solo un registro en consola para nosotros
console.log(sum(7,3))

// Exporta la función para usarla en otros archivos 
// (similar a la palabra clave "export" cuando se usa webpack)


//-----------------------------------------------------------------

// Declaramos una función con el nombre exacto "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    // Retornamos el valor en dólares
    return valueInDollar;
}

const fromDollarToYen = (usd) => {
    let resultado = (usd/1.07)*156.5;
    return parseFloat(resultado.toFixed(3));
}

const fromYenToPound = (jpy) => {
    let resultado = (jpy/156.5)*0.87;
    return parseFloat(resultado.toFixed(3));
}

module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };
