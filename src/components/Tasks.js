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
    axios.get('http://fakeapi.com').then(res => setTasks(res.data))
  }, [])

  console.log(tasks)

  return (
    <div className="container-tile" id="task-tile">
      <div id="task-top-div">
        <h1 id="task-header">To Do</h1>
      </div>
      <div id="tasks-div">
        {
          tasks.map(task => {
            return (
              <Task
                id={task.id}
                items={task}
              />
            )
          })
        }
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