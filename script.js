let datos1 = [1, "arbol", 2, 3, "pez", "auto", 4]
let datos2 = [9, 22, "moto", "pepe"]

function ordenar(arrays) {
    let numeros = []
    let palabras = []
    for(let item of arrays) {
        if (typeof item === "number") {
            numeros.push(item)
        }
        else if (typeof item === "string") {
            palabras.push(item)
        }
    }
    return {numeros, palabras}

}
