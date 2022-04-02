const frase1 = 'EH? NO TE ESCUCHO, HIJO!';
const frase2 = 'NO, NO DESDE 1983';
const fraseClabe = 'ADIOS TQM';


function abuelita() {
    let i = 0;
   while (i !=3){
    let respuesta = prompt('dile algo a tu abuelita');
    if (respuesta == fraseClabe){
        i++;
    }else if (respuesta == respuesta.toUpperCase()) {
            alert(frase2);
        } else {
            alert(frase1);
        }

       
   }
}