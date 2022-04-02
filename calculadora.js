
let numero1 = Number(prompt('ingresa el primer numero'));
let operador = prompt('que operador deseas utilizar?');
let numero2 = Number(prompt('ingresa el segundo numero'));
let suma = numero1 + numero2;
let resta = numero1 - numero2;
let division = numero1 / numero2;
let multiplicacion = numero1 * numero2;
    if (operador ==='+'){
      alert('El resultado de la suma es ' + suma)
    }
      else if (operador ==='-'){
        alert('El resultado de la resta es ' + resta)
      }else if (operador ==='*'){
        alert('El resultado de la multiplicacion es ' + multiplicacion);
      }else if (operador ==='/'){
        alert('El resultado de la division es ' + division);
    } 
    }
