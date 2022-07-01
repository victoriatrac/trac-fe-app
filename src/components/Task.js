import React from 'react'
import '../css/tasks.css'

function Task(props) {
  const { id, item, handleToggle } = props

  const markDone = (e) => {
    e.preventDefault()
    handleToggle(id)
  }
  
  if (!item) {
    return <p>No tasks to show</p>
  }
  else {
    return (
      <div class="task-div">
        <p onClick={markDone} class={item.checked ? "done" : ""}>{item.task}</p>
      </div>
    )
  }
}

export default Task 