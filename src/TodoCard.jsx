import React from 'react'
import { useState } from 'react'
export default function TodoCard() {
    const [task,setTask] = useState([
        {id:5271, name:"Record React Lecture", completed:true},
        {id:7825, name:"Edit React Lecture", completed:false},
        {id:8391, name:"Watch React Lecture", completed:false}
      ])

      function deleteHandle(id) {
        let update = task.filter((e)=>e.id !== id)
        console.log(update);
        setTask(update)
      }
    return (
        <>
        <ul>
            {task.map((e, key) => (
                <>
                    {/* {show ? <div><li key={e.id}>{e.id} - {e.name}</li> <button onClick={()=>deleteHandle(e.id)}>delete</button></div> : <h1>Please select a topic</h1>} */}

                    {show && <div><li key={e.id}>{e.id} - {e.name}</li> <button onClick={() => deleteHandle(e.id)}>delete</button></div>}
                </>
            ))}
        </ul >
    </>
  )
}
