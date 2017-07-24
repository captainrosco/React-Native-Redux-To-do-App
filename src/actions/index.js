export const addItem = (text) => {
  return {
    type: 'add_Item'
  }
}

export const onTextChange = (text) => {
  return {
    type: 'text_Change',
    payload: text
  }
}


export const delItem = (text) => {
  return {
    type: 'delete_Item',
    payload: text
  }
}
