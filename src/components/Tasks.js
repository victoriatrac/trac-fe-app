import React, { useState, useEffect } from 'react'
// import axios from 'axios'

import TaskForm from './TaskForm'
import Task from './Task'
import './components.css'
import './tasks.css'

import axios from '../fakeaxios'

const initialForm = {
  id: Date.now(),
  task: "",
  checked: false
}

// function checkOff(completed) {
//   console.log(completed)
// }

function Tasks() {
  const [ tasks, setTasks ] = useState([])
  const [ form, setForm ] = useState(initialForm)

  const update = (name, value) => {
    setForm({...form, [name]: value})
  }

  const submit = () => {
    setTasks([...tasks, form])
    setForm(initialForm)
  }

  useEffect(() => {
    axios
      .get('http://localhost:1234/tasks')
      .then(res => setTasks(res.data))
  }, [])

  console.log('tasks', tasks)

  return (
    <div className="container-tile" id="task-tile">
      <div id="task-top-div">
        <span id="task-header">To Do</span>
      </div>
      <div id="tasks-div">
        <ul>
          {
            tasks.map(task => {
              return (
                <li>
                  <Task
                    id={task.id}
                    items={task}
                  />
                </li>
              )
            })
          }
      </ul>
      </div>
      <div id="task-bottom-div">
        <TaskForm
          form={form}
          update={update}
          submit={submit}
        />
      </div>     
    </div>
  )
}

export default Tasks