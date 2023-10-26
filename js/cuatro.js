/* 
Realiza un script que pida números hasta que se pulse “cancelar”. 
Si no es un número deberá indicarse con un «alert» y 
seguir pidiendo números. 
Al salir con “cancelar” 
deberá indicarse la suma total de los números introducidos.


*/

let suma = 0;

while(true){
    let input = prompt('Ingrese un numero')

    if(input === null){
        suma+= 0
        break
    }

    console.log(suma)
    suma += parseInt(input)
}

document.write('el resultado es',suma)