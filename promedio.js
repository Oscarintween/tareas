let numeroDeMaterias = Number(prompt('cuantas materias deseas promediar'));
let suma = [];
  for(i = numeroDeMaterias; i>0; i--){
    let nota = Number(prompt('ingresa una nota'));
    suma.push(nota);
  }
  let sum = suma.reduce(function (a, b) {return a + b;}, 0);
  let promedio = sum / numeroDeMaterias;
    if (promedio < 70){
      alert('tu promedio es de ' + promedio + ' No Aprobado');
    } else if (promedio > 70){
      alert('tu promedio es de ' + promedio + ' Aprobado');
    }
  