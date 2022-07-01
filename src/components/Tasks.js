import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {v4 as uuid} from 'uuid'

import TaskForm from './TaskForm'
import Task from './Task'
import '../css/components.css'
import '../css/tasks.css'


const initialForm = {
  id: uuid(),
  task: "",
  checked: false
}

function Tasks() {
  const [ taskList, setTasks ] = useState([])
  const [ form, setForm ] = useState(initialForm)

  useEffect(() => {
    axios
      .get(`http://localhost:1234/tasks`)
      // .get(`https://fakeapi.com`)
      .then(res => {
        console.log(res.data)
        setTasks([...taskList, ...res.data])
      })
      .catch(err => {
        console.log(err)
      })
  }, []) 

  const handleChange = (name, value) => {
    setForm({...form, [name]: value})
  }

  const handleToggle = (id) => {
    let mapped = taskList.map(task => {
      return task.id === id ? { ...task, checked: !task.checked } : { ...task }
    })
    setTasks(mapped)
    console.log("mapped", taskList)
  }

  const handleFilter = () => {
    let filtered = taskList.filter(task => {
      return !task.checked
    })
    setTasks(filtered)
  }

  const handleSubmit = () => {
    setTasks([...taskList, form])
    setForm({...initialForm, id: uuid()})
  }

  return (
    <div class="tile-container">
      <div id="task-tile">
        <div id="task-top-div">
          <span id="task-header">To Do</span>
        </div>
        <div id="tasks-div">
          <ul>
            {
              ( taskList.length === 0 ? "no tasks to display" :
              taskList.map(task => {
                return (
                  <li>
                    <Task
                      key={task.task}
                      id={task.id}
                      item={task}
                      handleToggle={handleToggle}
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
            update={handleChange}
            submit={handleSubmit}
          />
          <button class="task-clear-button" onClick={handleFilter}>X</button>
        </div>
      </div>
    </div>
  )
}

export default Tasks