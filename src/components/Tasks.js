import React, { useState, useEffect } from 'react'
import axios from 'axios'

import TaskForm from './TaskForm'
import Task from './Task'
import './components.css'
import './tasks.css'


const initialForm = {
  id: Date.now(),
  task: "",
  checked: false
}

function Tasks() {
  const [ tasks, setTasks ] = useState([])
  const [ form, setForm ] = useState(initialForm)

  useEffect(() => {
    axios
      .get(`http://localhost:1234/tasks`)
      // .get(`https://fakeapi.com`)
      .then(res => {
        console.log(res.data)
        setTasks([...tasks, ...res.data])
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  const update = (name, value) => {
    setForm({...form, [name]: value})
  }

  const submit = () => {
    setTasks([...tasks, form])
    setForm(initialForm)
  }

  return (
    <div className="container-tile" id="task-tile">
      <div id="task-top-div">
        <span id="task-header">To Do</span>
      </div>
      <div id="tasks-div">
        <ul>
          {
            ( tasks.length === 0 ? "no tasks to display" :
            tasks.map(task => {
              return (
                <li>
                  <Task
                    id={task.id}
                    items={task}
                  />
                </li>
              )
            }))
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