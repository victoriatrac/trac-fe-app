import React from 'react'

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
    <form className="form-container" onSubmit={handleSubmit}>
      <div className="form-inputs">
        <label>
          Task
          <input
            type="text"
            name="task"
            placeholder="add a task"
            value={form.task}
            onChange={handleChange}
          />
        </label>
      </div>
      <div className="submit">
        <button>Submit</button>
      </div>
    </form>
  )
}

export default TaskForm