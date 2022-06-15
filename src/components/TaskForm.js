import React from 'react'
import './tasks.css'

function TaskForm(props) {
  const { form, update, submit } = props

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
      <div className="task-form-inputs">
        <label
          for="task">
          <input
            id="task"
            type="text"
            name="task"
            placeholder="add a task"
            value={form.task}
            onChange={handleChange}
          />
        </label>
        <div id="task-submit">
          <button>Submit</button>
        </div>
      </div>
    </form>
  )
}

export default TaskForm