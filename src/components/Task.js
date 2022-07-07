import React, { useState } from 'react'
import '../css/tasks.css'

/* Task app component */

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

  /* Handles change for editing an existing task */
  const handleChange = (e) => {
    setEditedTask(e.target.value)
  }

  /* Handles the submit for editing an existing tasks */
  const handleSubmit = (e) => {
    e.preventDefault()
    editTask(id, editedTask)
    setEditedTask("")
    setEditing(false)
  }

  /* Shows edit/delete buttons when hovering over the task */
  const handleMouseOver = () => {
    setIsHovering(true)
  }
  
  /* Hides edit/delete buttons when the mouse is moved away from the task */
  const handleMouseOut = () => {
    setIsHovering(false)
  }

  /* Creates the placeholder text for the edit text box */
  const editText = `editing ${item.task}`

  /* Edit template - visible when the user is actively editing a task */
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

  /* Handler to mark tasks as completed off list */
  const markDone = (e) => {
    e.preventDefault()
    handleToggle(id)
  }

  /* Visible template - default view of individual task */
  const viewTemplate = (
    <div className="task-div"
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
    >
      {/* If the item is completed, change the CSS class so it's marked out */}    
      <span
        onClick={markDone} 
        className={item.checked ? "done" : ""}
      >
        {item.task}
      </span>
      {/* If the user is hovering over a task, show the edit/delete buttons for it. */}
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

    {/* Check to see if the edit or view template should be displayed */}
    return (
      <>{isEditing ? editTemplate : viewTemplate}</>
    )
  // }
}

export default Task 