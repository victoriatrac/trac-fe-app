import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {v4 as uuid} from 'uuid'

import TaskForm from './TaskForm'
import Task from './Task'
import '../css/components.css'
import '../css/tasks.css'

const FILTER_MAP = {
  All: () => true,
  Active: task => !task.checked,
  Complete: task => task.checked
}

const FILTER_NAMES = Object.keys(FILTER_MAP)

const initialForm = {
  id: uuid(),
  task: "",
  checked: false
}

function Tasks() {
  const [ taskList, setTasks ] = useState([])
  const [ form, setForm ] = useState(initialForm)
  const [ filter, setFilter ] = useState('All')

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

  const handleSubmit = () => {
    setTasks([...taskList, form])
    setForm({...initialForm, id: uuid()})
  }

  const handleFilter = () => {
    let filtered = taskList.filter(task => {
      return !task.checked
    })
    setTasks(filtered)
  }

  const editTask = (id, editedTask) => {
    const editedTaskList = taskList.map(task => {
      if (id === task.id) {
        return {...task, task: editedTask}
      }
      return task
    })
    console.log(editedTaskList)
    setTasks(editedTaskList)
  }

  const deleteTask = (id) => {
    const remainingTasks = taskList.filter(task => id !== task.id)
    setTasks(remainingTasks)
  }

  const FilterButton = (props) => {
    console.log(props)
    return (
      <button
        type="button"
        aria-pressed={props.isPressed}
        onClick={() => props.setFilter(props.item)}
      >Show {props.item} tasks</button>
    )
  }

  const filterList = FILTER_NAMES.map(name => (
    <FilterButton key={name} item={name} isPressed={name === filter} setFilter={setFilter} />
  ))

  return (
    <div className="tile-container">
      <div id="task-tile">
        <div id="task-top-div">
          <span id="task-header">To Do</span>
        </div>
        <div id="tasks-div">
          <p>Number of tasks: {taskList.length}</p>
          <p>{filterList}</p>
          <ul>
            {
              ( taskList.length === 0 ? "no tasks to display" :
              taskList
                .filter(FILTER_MAP[filter])
                .map(task => {
                return (
                  <li>
                    <Task
                      key={task.task}
                      id={task.id}
                      item={task}
                      handleToggle={handleToggle}
                      deleteTask={deleteTask}
                      editTask={editTask}
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
          <button className="task-clear-button" onClick={handleFilter}>X</button>
        </div>
      </div>
    </div>
  )
}

export default Tasks