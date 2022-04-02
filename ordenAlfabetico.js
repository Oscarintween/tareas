let palabras = ['naranja','fresa','sandia','uvas','cerezas','manzana'];
let palabrasOrdenadas = palabras.forEach(function(){
    for (let palabra1 = 0; palabra1 < palabras.length; palabra1++) {
        for (let palabra2 = palabra1 + 1; palabra2 < palabras.length; palabra2++) {
        if (palabras[palabra1] > palabras[palabra2]) {
            [palabras[palabra1], palabras[palabra2]] = [palabras[palabra2], palabras[palabra1]] 
            }
        }    
    }
    return palabras
})
console.log(palabras);
    
 //jojojjo
 const nacionalidad = ['mexicano', 'mexicano', 'colombiano', 'peruano', 'chileno', 'peruano', 'mexicano', 'cubano', 'colombiano'];
 const result = nacionalidad.reduce((accumulator, currentItem) => (accumulator[currentItem] = (accumulator[currentItem] || 0) + 1, accumulator), []);
 console.log(result);