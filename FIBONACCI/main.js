/* la serie empieza con 0,1 y se toma el cero y el uno y se suman para
asi poder dar el resultado de 1 para el siguiente valor tomamos el 1 y el 1 para asi
para que el resultado sea 2 luego se toma los siguientes valores que es 1 y 2 son 3

0, 1, 1, 2, 3, 5, 8*/

function generarFiboncci(limit){



    const fib = [ 0 ,1]; // aqui se le pasa un constante que va hacer el array a retornar  donde cero y uno son los dos valores iniciales

    // se inicia en la posicion 2 por que es el resultados que deseamos saber 

    for (let i = 2; i < limit; i++){
        fib[i] = fib[i - 1] +  fib[ i - 2]; // lo que hacemos es agregar la i e igualarlo a la suma de las dos anteriores,
                                            // la i - 2  nos ayida a indicar que estamos tomando las dos anteriores

    }

    return fib;

}


//limit = prompt("Ingrese un numero")


let fibon = parseInt(prompt("ingresa un numero"))


const fibSerie = generarFiboncci(fibon); // cuantos desea 
const ul = document.getElementById("fib") //Esto nos ayuda a a traer el elemento creado en el html

/* la UL le vamos añadir un elemento de fibonacci */

/* aqui vamos hacer un bucle o un for o un wile
pero vamos a crear es que la fibserie tengo un elemento */

//aqui se va a pintar la lista de ul 

fibSerie.forEach ( Number =>  {

    const li = document.createElement("li"); // aqui estamos creando elementos dentro de html
    li.innerHTML = Number; // esto es para introducir en el html el number
    ul.append(li);  // esto nos ayuda a tener las li dentro de las lu 

});





