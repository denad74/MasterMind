import React, { useState } from 'react';
import Colors from './Colors';
import Solution from './Solution';
import Board from './Board';


const Game = () => {

    
    const colors = ['red', 'green', 'blue', 'orange', 'purple']
    const trueRowArr= []
    for (let i = 0; i < 4; i++) {
      trueRowArr.push(colors[Math.floor(Math.random() * 4) + 1])
    }   
    
   

    const [values, setValues] = useState({
      colors: colors,
      activeColor: 'red',
      previousRows: [],
      previousHints: [],
      currentRow: ['', '', '', ''],
      hints: [0, 0, 0, 0],
      activeRow: 0,
      totalRows: 10,
      trueRow: trueRowArr,
      canCheck: false,    
      victory: false,
      defeat: false,
    })


    

    
    const activateColor = (color) => {
        setValues({...values, activeColor : color || values.activeColor})
    }
    console.log(values.activeColor);
 
    // this.activateColor = this.activateColor.bind(this)  
    // this.setColor = this.setColor.bind(this)
    // this.checkRow = this.checkRow.bind(this)
    // this.newGame = this.newGame.bind(this)
  
    const setColor = (color, id) => {
        console.log(color);
        if (values.victory) {
            return false;
        };

        const rowId = +id.substr(1, id.indexOf('-') - 1);
        const pegId = +id.substr(id.indexOf('-') + 1);
        let currentRow = values.currentRow;
        let isArrayFull = 0;

    if (values.activeRow === rowId && color) {
        currentRow[pegId] = color;
        setValues({...values,
            currentRow,  currentRow}
        );

      /* Checking if currentRow is Full */
      for (let i in currentRow) {
        if (currentRow[i].length > 0) {
          isArrayFull++;
        }
      }
      if (isArrayFull >= currentRow.length) {
          setValues({ ...values, canCheck: true });
      } else {
          setValues({...values, canCheck: false });
      }
    }
  }

  const checkRow =() => {
    const currentRow = JSON.parse(JSON.stringify(values.currentRow))
    const trueRow = JSON.parse(JSON.stringify(values.trueRow))
    const hints = values.hints
    const previousHints = values.previousHints
    const previousRows = values.previousRows

     /* Checking extact matches */
    for (let i = 0; i < 4; i++) {
      if (currentRow[i] === trueRow[i]) {
        hints[i] = 2
        delete (currentRow[i])
        delete (trueRow[i])
      }
    }

    /* Checking partial matches */
    for (let i in currentRow) {
      for (let j in trueRow) {
        if (currentRow[i] === trueRow[j]) {
          hints[i] = 1
          delete (currentRow[i])
          delete (trueRow[j])
        }
      }
    }

    hints.sort((a, b) => (b - a))

    /* checking if player won */
    let victory = true
    for (let i in hints) {
      if (hints[i] < 2) {
        victory = false;
        break;
      }
    }

     /* checking if player lost */
    let defeat = values.defeat;
    if (values.activeRow >= values.totalRows-1) {
      defeat = true;
    }

    /* updating board */
    previousHints.push(hints)
    previousRows.push(values.currentRow)

    setValues({...values,
      hints: [0, 0, 0, 0],
      activeRow: values.activeRow + 1,
      previousHints: previousHints,
      currentRow: ['', '', '', ''],
      previousRows: previousRows,
      canCheck: false,
      victory: victory,
      defeat: defeat,
    })

  }

  const newGame =() => {
    
    const trueRowArr = []
    for (let i = 0; i < 4; i++) {
      trueRowArr.push(values.colors[Math.floor(Math.random() * 4) + 1])
    }

      
      
    setValues({...values, 
      activeRow: 0,
      previousRows: [],
      previousHints: [],
      currentRow: ['', '', '', ''],
      hints: [0, 0, 0, 0],
      trueRow: trueRowArr,
      canCheck: false,
      victory: false,
      defeat: false,
    })
  }
console.log(values);
  
    let msg = values.victory ? 'You Win!!' :
               ( values.defeat ? 'You Lost :(' : '')
    return (
      <div className='game-container'>
          
        <Colors
          list={values.colors}
          activeColor={values.activeColor}
          action={activateColor} />

         <Board
          state={values}
          pegAction={setColor}
        checkAction={checkRow}   
           />

        <p className='msg'> {msg} </p>           
        <Solution
          state={values}
          newGame={newGame} />  
      </div>
    );
  
}
export default Game;