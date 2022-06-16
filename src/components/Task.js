import React from 'react'
import './tasks.css'

function Task(props) {
  const { items } = props
  
  if (!items) {
    return <p>No tasks to show</p>
  }
  else {
    return (
      <div className="task-div">
        <p>{items.task}</p>
      </div>
    )
  }
}

export default Task