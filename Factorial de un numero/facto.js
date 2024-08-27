 let fact = 5; 
 
 function factorial(fact){
    if (fact === 0) {
        return  1; 
    }
    return  fact * factorial (fact  - 1)
 }

 console.log(factorial(fact));


 let facto  = 5; 

 function calcularFactorial(facto){
    let result = 1;

    for (let i  = 1; i  <=facto; i ++){
        result *= i;
    }
    return result;

 }

 console.log(calcularFactorial(facto));
