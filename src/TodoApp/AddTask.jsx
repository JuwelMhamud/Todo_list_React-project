import { useState } from 'react';
export default function AddTask({onAdd}) {

  const [addText, setAddText] = useState()

  const handleChangeText = (e)=>{
    setAddText(e.target.value)
  }


  return (
    <>
      <input className="border-2" placeholder="Add task"  value={addText} onChange={handleChangeText}/>
      <button className="border-2" onClick={()=>{setAddText(""), onAdd(addText)}}
      >Add</button>
    </>
  );
}
