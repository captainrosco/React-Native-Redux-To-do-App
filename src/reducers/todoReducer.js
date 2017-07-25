import {
  ADD_TASK, TEXT_CHANGE, DELETE_TASK
} from '../actions/'
const INIT_STATE = { text: '', tasks: [] }

export default function addTask (state = INIT_STATE, action) {
  switch (action.type) {
    case ADD_TASK:
      if (state.text === '') return state
      return { ...state, tasks: [...state.tasks, state.text], text: '' }

    case TEXT_CHANGE:
      return { ...state, text: action.payload }

    case DELETE_TASK:
      const index = state.tasks.indexOf(action.payload)
      return {
        ...state,
        tasks: [...state.tasks.splice(0, index), ...state.tasks.splice(1)]
      }

    default:
      return state
  }
}
