import React from 'react'
import '../css/tasks.css'

/* Task form component for task input and submission */

function TaskForm(props) {
  const { 
    form, 
    update, 
    submit, 
    disabled, 
    errors 
  } = props

  /* Handles change for text input */
  const handleChange = event => {
    const { name, value } = event.target
    update(name, value)
  }

  /* Handles submission for adding a new task */
  const handleSubmit = event => {
    event.preventDefault()
    submit()
  }

  /* Creates form with text input + submission button */
  return (
    <form
      className="task-form-container" 
      onSubmit={handleSubmit}
    >
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
      {/* Error display - does not work */}
      <div className="task-form-errors">
        {errors.task}
      </div>
    </form>
  )
}

export default TaskForm