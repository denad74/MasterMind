import Circles from "./Circles";
import OkButton from "./OkButton";
import Hints from "./Hints";

const Row = (props) => {
    console.log(props);
  let active = ''
  if (+props.id.substr(4) === props.state.activeRow) {
    active = 'active'
  }

  return (
    <div className={'row ' + active} id={props.id}>
      <Circles
        rowId={props.id}
        state={props.state}
        pegAction={props.pegAction} />
      <OkButton
        state={props.state}
        rowId={props.id}
        checkAction={props.checkAction} />
      <Hints
        state={props.state}
        rowId={props.id} />
    </div>
  )
}

export default Row;