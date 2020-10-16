import React from 'react'

function Button(props) {
  return (
    <button type="button" onClick={props.onButtonClick}>
      Klik
    </button>
  )
}

export default Button
