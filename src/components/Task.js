import React, { useState } from 'react'
import '../css/tasks.css'

function Task(props) {
  const {
    id,
    item,
    handleToggle,
    deleteTask,
    editTask
  } = props

  const [ isEditing, setEditing ] = useState(false)
  const [ editedTask, setEditedTask ] = useState('')
  const [ isHovering, setIsHovering ] = useState(false)

  const handleChange = (e) => {
    setEditedTask(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    editTask(id, editedTask)
    setEditedTask("")
    setEditing(false)
  }

  const handleMouseOver = () => {
    setIsHovering(true)
  }
  
  const handleMouseOut = () => {
    setIsHovering(false)
  }

  const editText = `editing ${item.task}`

  const editTemplate = (
    <div className="task-div">
      <form onSubmit={handleSubmit}>
        <input
          id={id} 
          type="text"
          placeholder={editText}
          value={editedTask}
          onChange={handleChange}
        />
        <button 
          type="button" 
          onClick={() => setEditing(false)}
        >
          Cancel
        </button>
        <button
          type="submit"
        >
          Save
        </button>
      </form>
    </div>
  )

  const markDone = (e) => {
    e.preventDefault()
    handleToggle(id)
  }

  const viewTemplate = (
    <div className="task-div"
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}>
      <span
        onClick={markDone} 
        className={item.checked ? "done" : ""}
      >
        {item.task}
      </span>
      {isHovering && (
        <span className="task-buttons">
          {/* <button
            type="button" 
            onClick={() => setEditing(true)}
          >
            Edit
          </button>
          <button
            type="button" 
            onClick={() => deleteTask(id)}
          >
            Delete
          </button> */}

          <p
            type="button" 
            onClick={() => setEditing(true)}
          >
            Edit
          </p>
          <p
            type="button" 
            onClick={() => deleteTask(id)}
          >
            Delete
          </p>
        </span>
      )}
    </div>
  )
  
  // if (!item) {
  //   return <p>No tasks to show</p>
  // }
  // else {

    // return (
    //   <div className="task-div">
    //     <p onClick={markDone} className={item.checked ? "done" : ""}>{item.task}</p>
    //     <button>Edit</button>
    //     <button type="button" onClick={() => deleteTask(id)}>Delete</button>
    //   </div>
    // )

    return (
      <>{isEditing ? editTemplate : viewTemplate}</>
    )
  // }
}

export default Task 