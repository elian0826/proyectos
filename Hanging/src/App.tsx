import { useEffect, useState } from 'react';
import { letters } from './helpers/letters';
import './App.css';
import { HangImage } from './componets/Hanglmange';
import {  getRandomWord} from "./helpers/getRandomWord";

function App() {

  const [word, setWord] = useState(getRandomWord);
  const [ hiddenWord, setHiddenWord ] = useState( '_ '.repeat( word.length ) );
  const [ attempts, setAttempts ] = useState(0);
  const [ lose, setlose ] = useState (false);
  const [ won, setWon ] = useState (false);


//determinar si la persona perdio 
  useEffect ( () =>{

    if( attempts >= 9){
      setlose( true)
    }


  },[attempts] );

  //determinar si gano 

  useEffect (()=>{
    const currentHinddenword = hiddenWord.split(' ').join('');

    if (currentHinddenword === word ){
      setWon(true);

    }

  }, [hiddenWord])



  const checkLetter = ( letter: string ) => {

    if ( lose) return; 
    if ( won) return; 

    

  if ( !word.includes(letter) ) {
    setAttempts( Math.min( attempts + 1, 9 )  );
    return;
  }

  const hiddenWordArray = hiddenWord.split(' ');

  console.log( hiddenWordArray );
   
  for( let i = 0; i < word.length; i++ ) {
    if ( word[i] === letter ) {
      hiddenWordArray[i] = letter;
    }
  }
  setHiddenWord( hiddenWordArray.join(' ') );
}

const newGame = () => {

  const newWord = getRandomWord();

  setWord( newWord );
  setHiddenWord( '_ '.repeat( newWord.length ) );

  setAttempts( 0 );
  setlose( false );
  setWon( false );
}









  return(
    <div className='App'>


      {/* imagenes*/ }
      <HangImage  imageNumber={ attempts }/>


      {/* palabra oculta*/ }
      <h3>{ hiddenWord }</h3>


      {/* Contador de intenetos*/ }
      <h3> Intento: {attempts} </h3>

      {/* Mensaje si perdio */}
      {
        ( lose ) 
        ? <h2>Perdio {word}</h2>
        : ''
      }

      {/* Mensaje si gano */}
      {
        ( won ) 
        ? <h2>felicidades usted gano {word}</h2>
        : ''
      }


      {/* botones de letras*/ }
      {
        letters.map(( letter) => (

          <button 
          onClick={() => checkLetter(letter)}
          key={letter}>
            {letter}</button>
        ) )


      }
      
      <br /><br />
      <button onClick={ newGame}> ¿NUEVO JUEGO?</button>
      
      


      





    </div>
  )

  
};

export default App;
