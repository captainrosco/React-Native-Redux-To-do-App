export const ADD_TASK = 'ADD_TASK'
export const TEXT_CHANGE = 'TEXT_CHANGE'
export const DELETE_TASK = 'DELETE_TASK'

export const addTask = () => {
  return {
    type: ADD_TASK
  }
}

export const onTextChange = (text) => {
  return {
    type: TEXT_CHANGE,
    payload: text
  }
}

export const deleteTask = (task) => {
  return {
    type: DELETE_TASK,
    payload: task
  }
}
