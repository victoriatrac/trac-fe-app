import React from 'react'
import './tasks.css'

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
      <div className="task-div">
      <p onClick={markDone} className={item.checked ? "done" : ""}>{item.task}</p>
      </div>
    )
  }
}

export default Task