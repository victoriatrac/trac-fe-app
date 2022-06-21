import React from 'react'
import './tasks.css'

function Task(props) {
  const { id, items, handleToggle } = props

  const markDone = (e) => {
    e.preventDefault()
    handleToggle(id)
  }
  
  if (!items) {
    return <p>No tasks to show</p>
  }

  return (
    <div className="task-div">
      <p onClick={markDone} className={items.checked ? "done" : ""}>{items.task}</p>
    </div>
  )
}

export default Task