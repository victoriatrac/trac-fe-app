import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './tasks.css'
import './components.css'

import TaskForm from './TaskForm'

const initialForm = {
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
    setTasks(res.data)
  }, [])

  return (
    <div className="container-tile">
      <h3>To Do</h3>
      <TaskForm form={form} update={update} submit={submit} />
    </div>
  )
}

export default Tasks