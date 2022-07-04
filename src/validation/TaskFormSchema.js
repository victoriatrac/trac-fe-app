import * as Yup from 'yup'

const TaskFormSchema = Yup.object().shape({
  task: Yup
    .string()
    .trim()
    .required("task input is required")
})

export default TaskFormSchema