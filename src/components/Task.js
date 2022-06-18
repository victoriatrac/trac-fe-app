import React from 'react'
import './tasks.css'

function Task(props) {
  const { items } = props
  
  if (!items) {
    return <p>No tasks to show</p>
  }

  return (
    <div className="task-div">
      <p className={items.checked ? "done" : ""}>{items.task}</p>
    </div>
  )
}

export default Task