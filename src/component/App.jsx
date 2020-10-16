import React, { useState } from 'react'
import Button from './Button'
import Input from './Input'

function App() {

  const [inputValue, setInputValue] = useState('')

  const color = 'red'
  function handleOnButtonClick() {
    //
    alert(inputValue)
  }

  function onInputChange(e) {
    // console.log(e.target.value)
    setInputValue(e.target.value)
  }

  function handleClick() {
    console.log('click')
  }

  function handleChange(e) {
    setInputValue(e.target.value)
  }

  return (
    <div>
      APP : {inputValue}
      <br />
      <Input onInputChange={handleChange} />
      <br />
      <Button onButtonClick={handleClick} />
    </div>
  )
}

export default App
