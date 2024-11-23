import { useState } from "react";
import "./App.css";
import AddTask from "./TodoApp/AddTask";
import { initialTasks } from "./TodoApp/Data";
import TaskList from "./TodoApp/TaskList";

function App() {
  const [tasks, setTasks] = useState(initialTasks);

  // get height id form the data
  const nextId = (data) => {
    const maxId = data.reduce((prev, current) =>
      prev && prev.id > current.id ? prev.id : current.id
    );

    return maxId + 1;
  };

  // handlers
  const addHandelerTask = (text) => {
    setTasks([
      ...tasks,
      {
        id: nextId(tasks),
        text: text,
        done: false,
      },
    ]);
  };

  const handleChangeTask = (task)=>{
    const nextTasks = tasks.map(t=>{
      if (t.id === task.id) {
        return task 
      }else{
        return t
      }
    })

    setTasks(nextTasks)
  }

  const handleDeleteTask = (taskId)=>{
    setTasks(tasks.filter(t => t.id !== taskId))
  }

  
  return (
    <>
      <h1>Prague itinerary</h1>

      <AddTask  onAdd={addHandelerTask}/>

      <TaskList tasks={tasks} onChangeTask={handleChangeTask} onDeleteTask={handleDeleteTask}/>
    </>
  );
}

export default App;
