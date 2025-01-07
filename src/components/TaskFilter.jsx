import React from 'react'

const TaskFilter = ({onsetFilter ,onHandleDark,mode}) => {
  return (
    <div className='container task-filter-container my-2 d-flex'>
      <div className='filter-btns mx-1'>
        <button className='btn btn-outline-light p-3' onClick={()=> onsetFilter("All")}>All</button>
        <button className='btn btn-outline-success p-3 mx-1' onClick={()=> onsetFilter("Completed")}>Completed</button>
        <button className='btn btn-outline-danger p-3' onClick={()=> onsetFilter("Pending")}>Pending</button>
      </div>
      <button className='btn fs-2' onClick={()=>onHandleDark()}>
          {mode? <i className='bi bi-moon-fill'></i>:<i className='bi bi-brightness-high-fill'></i>}
      </button>
    </div>
  )
}

export default TaskFilter
