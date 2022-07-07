import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {v4 as uuid} from 'uuid'
import TaskFormSchema from '../validation/TaskFormSchema'
// import * as Yup from 'yup'

/* Component that displays all of the current tasks */

import TaskForm from './TaskForm'
import Task from './Task'
import '../css/components.css'
import '../css/tasks.css'

/* Maps through the tasks by checked state to create the filters */
const FILTER_MAP = {
  All: () => true,
  Active: task => !task.checked,
  Complete: task => task.checked
}

/* Creates the text for the filter buttons using the filter map keys */
const FILTER_NAMES = Object.keys(FILTER_MAP)

/* Initial form state for new task input*/
const initialForm = {
  id: uuid(),
  task: "",
  checked: false
}

const initialFormErrors = {
  task: ''
}

/* Starts submit button as disabled */
const initialDisabled = true

function Tasks() {
  const [ taskList, setTasks ] = useState([])
  const [ form, setForm ] = useState(initialForm)
  const [ filter, setFilter ] = useState('All')
  const [ formErrors, setFormErrors ] = useState({initialFormErrors})
  const [ disabled, setDisabled ] = useState(initialDisabled)


  useEffect(() => {
    /* Axios call to get the fake data from json-server */
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

  /* Handles change for new task input */
  const handleChange = (name, value) => {
    // Yup
    //   .reach(TaskFormSchema, name)
    //   .validate(value)
    //     .then(() => setFormErrors({...formErrors, [name]: ""}))
    //     .catch(err => setFormErrors({...formErrors, [name]: err.errors[0]}))

    setForm({...form, [name]: value})
  }

  /* Checks to see if the text input meets the validation requirements (not empty) */
  useEffect(() => {
    TaskFormSchema.isValid(form)
      .then(isValid => setDisabled(!isValid))
      .catch(err => console.log(err))
  }, [form])

  /* Toggles the task's completed state when activated */
  const handleToggle = (id) => {
    let mapped = taskList.map(task => {
      return task.id === id ? { ...task, checked: !task.checked } : { ...task }
    })
    setTasks(mapped)
  }

  /* Handles submission for new tasks, sets id to uuid so that it's unique */
  const handleSubmit = () => {
    setTasks([...taskList, form])
    setForm({...initialForm, id: uuid()})
  }

  /* Filter handler for the clear button */
  const handleFilter = () => {
    let filtered = taskList.filter(task => {
      return !task.checked
    })
    setTasks(filtered)
  }

  /* Updates the task list in state when one is edited */
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

  /* Removes individual task */
  const deleteTask = (id) => {
    const remainingTasks = taskList.filter(task => id !== task.id)
    setTasks(remainingTasks)
  }

  /* Sets the task filter button's class depending on if its active */
  const FilterButton = (props) => {
    return (
      <button
        type="button"
        className={props.isPressed ? "tasks-filter-active" : "tasks-filter-button"}
        aria-pressed={props.isPressed}
        onClick={() => props.setFilter(props.item)}
      >
        {props.item}
      </button>
    )
  }

  /* Map over filter names to create buttons */
  const filterList = FILTER_NAMES.map(name => (
    <FilterButton 
      key={name} 
      item={name} 
      isPressed={name === filter} 
      setFilter={setFilter} 
    />
  ))

  return (
    <div className="tile-container">
      <div id="task-tile">
        <div id="task-top-div">
          <span id="task-header">
            To Do
          </span>
        </div>
        <div id="tasks-div">
          <div id="tasks-filter">
            {filterList}
          </div>
          <ul>
            {
              ( taskList.length === 0 ? "No tasks left. Good job!" :
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
            disabled={disabled}
            errors={formErrors}
          />
          <button
            className="task-clear-button" 
            onClick={handleFilter}
          >
            Clear
          </button>
          <div>Total Tasks: {taskList.length}</div>
        </div>
      </div>
    </div>
  )
}

export default Tasks