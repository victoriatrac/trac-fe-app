import React from 'react'
import '../css/tasks.css'

function TaskForm(props) {
  const { 
    form, 
    update, 
    submit, 
    disabled, 
    errors 
  } = props

  const handleChange = event => {
    const { name, value } = event.target
    update(name, value)
  }

  const handleSubmit = event => {
    event.preventDefault()
    submit()
  }

  return (
    <form className="task-form-container" onSubmit={handleSubmit}>
      <div className="task-form-inputs-div">
          <input
            id="task"
            type="text"
            name="task"
            placeholder="add a task"
            value={form.task}
            onChange={handleChange}
          />
        <button 
          className="task-submit-button" 
          disabled={disabled}
        >
          Submit
        </button>
      </div>
      <div className="task-form-errors">
        {errors.task}
      </div>
    </form>
  )
}

export default TaskForm