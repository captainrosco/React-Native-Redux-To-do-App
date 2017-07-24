const INIT_STATE = { text: '', items: []};

export default function addItem(state = INIT_STATE, action) {
  switch (action.type) {
    case 'add_Item':
        return { ...state, items: [...state.items, state.text], text: ''}
    case 'text_Change':
      return {...state, text: action.payload};
    case 'delete_Item':
      var index = state.items.indexOf(action.payload);
      return {...state, items: [...state.items.splice(0, index), ...state.items.splice(1)]};
    default:
      return state
  }
}
