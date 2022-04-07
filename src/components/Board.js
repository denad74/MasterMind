import React from 'react'
import Row from './Row';

const Board =(props) => {
    console.log(props)

    let rows = [];
    for (let i = 0; i < props.state.totalRows; i++) {
      rows.push(
        <Row
          key={'row_' + i}
          id={'row_' + i}
          state={props.state}
          pegAction={props.pegAction}
          checkAction={props.checkAction} />
        )
    }

    return (
      <div className='board'>
        {rows}
        {/* <Row  key={'row_' + 1}
          id={'row_' + 1}
          state={props.state}
          pegAction={props.pegAction}
          checkAction={props.checkAction}/> */}
      </div>
    )
  
}

export default Board