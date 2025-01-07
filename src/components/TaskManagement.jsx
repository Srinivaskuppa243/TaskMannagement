import { useEffect, useState } from 'react';
import Taskform from './TaskForm';
import SearchBar from './SearchBar';
import TaskFilter from './TaskFilter';
import api from '../services/api';
import { toast } from 'react-toastify';
import Taskitem from './TaskItem';

const TaskManagement = ({ onHandleDark, mode }) => {
  const [tasks, setTasks] = useState([]);
  const [currentFilter, setCurrentFilter] = useState("All"); // State for current filter
  const [searchQue,setSearchQue]=useState("");
  // Fetching the data from servers
  useEffect(() => {
    api.get('/tasks')
      .then(({ data }) => setTasks(data))
      .catch((err) => toast.error("Error in fetching tasks"));
  }, []);

  // Function to create the task
  const addTask = (text, priority) => {
    let newTask = { text, completed: false, priority };
    api.post('/tasks', newTask)
      .then(({ data }) => {
        setTasks([...tasks, data]);
        toast.success("New Task added to the list 😁");
      })
      .catch((err) => toast.error("Failed to add task"));
  };

  // Function to edit the task
  const editTask = (id, text, priority) => {
    const updatedTask = { text, completed: false, priority };
    api.put(`/tasks/${id}`, updatedTask)
      .then(({ data }) => {
        setTasks(tasks.map(task => task.id === id ? data : task));
        toast.success("Edited a task 💪");
      })
      .catch((err) => toast.error("Failed to edit the task 😞"));
  };

  // Function to delete the task
  const delTask = (id) => {
    api.delete(`/tasks/${id}`)
      .then(() => {
        setTasks(tasks.filter(task => task.id !== id));
        toast.success("Deleted a task 💪");
      })
      .catch((err) => toast.error("Failed to delete the task 😞"));
  };

  // Function to toggle task completion
  const toggleComplete = (id) => {
    const updatedTasks = tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
    toast.success("Task completion status updated!");
  };

  // Function to filter tasks based on the current filter
  const filTask = () => {
    return tasks.filter(task =>{
      const matchfil= currentFilter=="All"||
                      (currentFilter =="Completed" && task.completed)||
                      (currentFilter=="Pending" && !task.completed)
      const matchSearch=task.text.toLowerCase().includes(searchQue.toLowerCase())
      return matchfil && matchSearch
    })
  };

  return (
    <div className='container my-2 p-2'>
      <div className='search-functionality'>
        <div className='row'>
          <div className='col-12 col-sm-8 col-md-8 col-lg-8'>
            <SearchBar onSearch={setSearchQue} />
          </div>
          <div className='col-12 col-sm-4 col-md-4 col-lg-4 d-flex'>
            <TaskFilter
              onHandleDark={onHandleDark}
              mode={mode}
              onsetFilter={setCurrentFilter} // Pass the filter change handler
            />
          </div>
        </div>
      </div>
      <Taskform onaddTask={addTask} />
      {/* Displaying the tasks based on the current filter */}
      <ul className='list-group'>
        {filTask().map((task) => (
          <Taskitem
            key={task.id}
            task={task}
            onEditTask={editTask}
            onDelTask={delTask}
            onToggleComplete={toggleComplete} // Pass the toggle function
          />
        ))}
      </ul>
    </div>
  );
};

export default TaskManagement;