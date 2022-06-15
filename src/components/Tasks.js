import React, { useState, useEffect } from 'react'
// import axios from 'axios'
import './tasks.css'
import './components.css'

import TaskForm from './TaskForm'
import Task from './Task'

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
    <div className="container-tile">
      <div>
        <h3>To Do</h3>
        <TaskForm form={form} update={update} submit={submit} />
        
        {
          tasks.map(task => {
            return (
              <Task id={task.id} items={task}/>
            )
          })
        }
      </div>
    </div>
  )
}

export default Tasks