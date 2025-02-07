import React, { useState } from 'react'

const TaskForm = ({onaddTask}) => {
    let[newTask,setNewTask]=useState("")
    let[priority,setPriority]=useState("Medium")
    //HANDLE TASKS
    function handlenewTask(){
        if(newTask.trim()!==""){
            onaddTask(newTask,priority)
            setNewTask("")
            setPriority("Medium")
        }
    }
    console.log(newTask)

  return (
    <div className='container Task-form-container my-2'>
      {/* Task form start */}
      <div className="row">
        {/* add items */}
        <div className="col-sm-6 col-md-8 col-lg-8">
            <input type="text" 
            className="form-control p-3" 
            placeholder="Add Tasks"
            value={newTask}
            onChange={(e)=>setNewTask(e.target.value)}/>
        </div>
        {/* priority- medium,high,low */}
        <div className="col-sm-3 col-md-2 col-lg-2">
            <select className='form-select'
            value={priority}
            onChange={(e)=>setPriority(e.target.value)}>
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
            </select>
        </div>
        {/* add Button */}
        <div className="col-sm-3 col-md-2 col-lg-2">
            <button className='btn btn-success' onClick={()=>handlenewTask()}>Add Task</button>
        </div>
      </div>
      {/* Task form end */}
    </div>
  )
}

export default TaskForm
