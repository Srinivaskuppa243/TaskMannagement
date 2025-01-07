import React, { useState } from 'react';

const TaskItem = ({ task, onEditTask, onDelTask, onToggleComplete }) => {
  const [isEditable, setIsEditable] = useState(false);
  const [oldTask, setOldTask] = useState(task.text);
  const [priority, setPriority] = useState(task.priority);

  function handleSave() {
    onEditTask(task.id, oldTask, priority);
    setIsEditable(false); // Exit edit mode after saving
  }

  return (
    <li className='list-group-item p-2 border border-danger my-2'>
      {isEditable ? (
        <div className="row">
          {/* Input for task text */}
          <div className="col-sm-6 col-md-8 col-lg-8 p-2">
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
            <button className='btn btn-danger' onClick={() => setIsEditable(false)}>Cancel</button>
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
              {task.text} (Priority: {task.priority})
            </label>
          </div>
          <div className='edit-feature'>
            <button className='btn btn-outline-success' onClick={() => setIsEditable(true)}>🖊️</button>
            <button className='btn btn-outline-danger' onClick={() => onDelTask(task.id)}>🛑</button>
          </div>
        </div>
      )}
    </li>
  );
};

export default TaskItem;