const numero100 = (numero) => {
    if (numero == 1) {
        console.log("Numeros del 1 al 100 de 1 en 1");
    }
    if (numero === 101) {
        return;
    }
    console.log(numero);
    return numero100(numero + 1)
};
numero100(1)

const numero500 = (numero) => {
    if (numero == 1000) {
        console.log("Numeros del 1000 al 500 de 2 en 2");
    }
    if (numero === 498) {
        return;
    }
    console.log(numero);
    return numero500(numero - 2)
};
numero500(1000)

const notas = [6, 8, 9, 2, 5, 10];

const sumarNotas = (notas) => {
    const suma = notas.reduce(
        (acumulador, valorActual) => acumulador + valorActual, 0
    );
    console.log("La suma de las notas es: ", suma);
    return suma;    
}
const resultadoSuma = sumarNotas(notas)

const promedioNotas = (resultadoSuma) => {
    const promedio = resultadoSuma / notas.length;
    console.log("El promedio de las notas es: ",promedio);
}
promedioNotas(resultadoSuma) 

