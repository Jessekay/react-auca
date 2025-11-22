import React from 'react'

function Button(props) {
  return (
    <div>
      <button onClick={props.clickMe} style={props.styleMe}>{props.label}</button>
      {props.clickMe}
    </div>
  )
}

export default Button
