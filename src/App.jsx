import React, { useState } from 'react'
import TaskManagement from './components/TaskManagement'

const App = () => {
  const[dark,setDark]=useState(false)
  function handleDarkMode(){
    setDark(!dark)
  }
  return (
    <div className={dark?"dark-mode":""}>
      <TaskManagement
      onHandleDark={handleDarkMode}
      mode={dark}/>
    </div>
  )
}

export default App
