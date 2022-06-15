import React from 'react'

function Task(props) {
  const { items } = props
  
  if (!items) {
    return <p>No tasks to show</p>
  }

  return (
    <div className="task-div">
      <h2>{items.task}</h2>
    </div>
  )
}

export default Task