import React from 'react';
import Rules from './components/Rules';
import Game from './components/Game';


const App =()=> {
    return (
    <div>
      <h2 className='title'> MasterMind </h2>
      <Rules/>
      <Game />      
    </div>
    );
}

export default App;
