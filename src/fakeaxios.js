const initialTaskList = [
  {
    id: "",
    task: "",
    checked: false
  },
]

export default {
  get() {
    return Promise.resolve({ status: 200, success: true, data: initialTaskList })
  },
  post(url, { id, task, checked }) {
    const newTask = { id, task, checked }
    return Promise.resolve({ status: 200, success: true, data: newTask })
  }
}
