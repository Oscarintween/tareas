let nombre = prompt('Cual es tu nombre');
let apellido = prompt('Cual es tu apellido');
alert(`Hola ${nombre + " " + apellido}`);




let elefantes = prompt('Ingresa la cantidad de elefantes');
let frase =  " elefantes se columpiaban sobre la tela de una araña, como veian que resistia fueron a llamar a otro elefante"
function cancion(){
  if (elefantes >= 1 && elefantes <=99){
    alert(elefantes + frase);
    elefantes++;
    cancion();
  }
}