import React, {useState} from 'react'

const link =  'https://en.wikipedia.org/wiki/Mastermind_(board_game)';

const Rules = () => {


    

    const [hide, setHide] = useState(true);
    const toogleRules = () => {

    setHide(hide ? false : true)
    }
    
    const rulesTitle = hide ? 'Show Rules' : 'Hide Rules';

    const style = {
      display: hide? 'none' : 'block',
    }
    return (
        <div className='rules'>
        <h3 onClick={toogleRules}> {rulesTitle} </h3>
        <p style={style}> Try to guess the pattern, in both order and
        color, within ten turns. After submitting a row,
        a small green squared is show for each circle
        in a correct position and color. A yellow square
        indicates the existence of a correct color in an
        incorrect position. <br />
        More info on <a href={link}>Wikipedia</a>.
        </p>
      </div>
    );
}

export default Rules