import React, { useState } from 'react';

const TaskItem = ({ task, onEditTask, onDelTask, onToggleComplete }) => {
  const [isEditable, setIsEditable] = useState(false);
  const [oldTask, setOldTask] = useState(task.text);
  const [priority, setPriority] = useState(task.priority);

  const getPriorityColor = (priority) => {
    switch (priority) {
      case "High":
        return "#ffadad"; // Light Red
      case "Medium":
        return "#ffd6a5"; // Light Orange
      case "Low":
        return "#caffbf"; // Light Green
      default:
        return "white";
    }
  };

  function handleSave() {
    onEditTask(task.id, oldTask, priority);
    setIsEditable(false); // Exit edit mode after saving
  }

  return (
    <div className='container'>
      <li className='list-group-item rounded-pill p-2 my-2' style={{ backgroundColor: getPriorityColor(task.priority) }}>
        {isEditable ? (
          <div className="row">
            {/* Input for task text */}
            <div className="col-sm-6 col-md-8 col-lg-8 p-3">
              <input
                type="text"
                className="form-control"
                placeholder="Add items"
                value={oldTask}
                onChange={(e) => setOldTask(e.target.value)}
              />
            </div>
            {/* Priority selection */}
            <div className="col-sm-3 col-md-2 col-lg-2">
              <select
                className="form-select"
                value={priority}
                onChange={(e) => setPriority(e.target.value)}
              >
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
                <option value="High">High</option>
              </select>
            </div>
            {/* Save and Cancel buttons */}
            <div className="col-sm-3 col-md-2 col-lg-2">
              <button className='btn btn-success' onClick={handleSave}>Save</button>
              <button className='btn btn-danger m-1' onClick={() => setIsEditable(false)}>Cancel</button>
            </div>
          </div>
        ) : (
          <div className='d-flex justify-content-between align-items-center'>
            {/* Checkbox to mark task as completed */}
            <div className='form-check'>
              <input
                type="checkbox"
                className="form-check-input"
                checked={task.completed}
                onChange={() => onToggleComplete(task.id)} // Call the toggle function
              />
              <label className={`form-check-label ${task.completed ? 'text-decoration-line-through' : ''}`}>
               {task.text} (<strong>{task.priority}</strong> Priority)
              </label>
            </div>
            <div className='edit-feature'>
              <button className='btn btn-outline-success' onClick={() => setIsEditable(true)}><i class="bi bi-pen"></i></button>
              <button className='btn btn-outline-danger m-1' onClick={() => onDelTask(task.id)}><i class="bi bi-trash"></i></button>
            </div>
          </div>
        )}
      </li>
    </div>
  );
};

export default TaskItem;