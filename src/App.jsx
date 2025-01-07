import React, { useState } from 'react'
import TaskManagement from './components/taskManagement'
import CountDownTimer from './components/CountDownTimer'

const App = () => {
  const[dark,setDark]=useState(false)
  function handleDarkMode(){
    setDark(!dark)
  }
  return (
    <div className={dark?"dark-mode":""}>
      <CountDownTimer/>
      <TaskManagement
      onHandleDark={handleDarkMode}
      mode={dark}/>
    </div>
  )
}

export default App
