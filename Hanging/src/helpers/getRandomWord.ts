let words: string[] = [

    'COMPUTADORA',
    'AGUACATE',
    'PAPAYA',
    'VEHICULOS',
    'BEISBOL',
    'ANIMAL',
    'VETERINARIO',
    'CELULAR',

]




export function getRandomWord (){

   const randomIndex =  Math.floor (Math.random() * words.length);


   return words [randomIndex]

}




