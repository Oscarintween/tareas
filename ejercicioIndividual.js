let arr = []

function agregarLibro(autor, title) {

  arr.push({
    'autor': autor,
    'title': title
  })
}
function imprimirLibro(){
  console.log(arr)
}