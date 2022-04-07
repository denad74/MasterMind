const OkButton = (props) => {
  const row = +props.rowId.substr(4)
  let disabled = 'disabled'
  const doNothing = () => (false)

  if (props.state.activeRow === row) {
    disabled = props.state.canCheck ? '' : 'disabled'
  }
  const checkAction = disabled === 'disabled' ? doNothing : props.checkAction

  return (
    <div
      className={'ok-button ' + disabled}
      onClick={checkAction}>
      check
    </div>
  )
}

export default OkButton;