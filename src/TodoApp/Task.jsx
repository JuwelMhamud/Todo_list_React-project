import { useState } from "react";
export default function Task({ task, onChangeTask, onDeleteTask }) {
  const [isEditing, setIsEditing] = useState(false);

  let taskContent;

  if (isEditing) {
    taskContent = (
      <>
        <input type="text" 
         value={task.text}
         onChange={(e)=>{
            onChangeTask({
                ...task, 
                text: e.target.value
            })
        }}/>
        <button className="border-2" onClick={()=>setIsEditing(false)}>Save</button>
      </>
    );
  } else {
    taskContent = (
      <>
        {task.text}
        <button className="border-2" onClick={()=> setIsEditing(true)}>Edit</button>
      </>
    );
  }


  return (
    <>
      <li>
        <label>
          <input type="checkbox" checked={task.done} onChange={(e)=>
            onChangeTask({
                ...task, 
                done:e.target.checked
            })
          } />

          {taskContent}

          <button className="border-2"  onClick={()=>{onDeleteTask(task.id)}}>Delete</button>
        </label>
      </li>
    </>
  );
}
