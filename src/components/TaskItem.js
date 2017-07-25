import React, { Component } from 'react'
import { Text, Button, View } from 'react-native'
import { connect } from 'react-redux'
import { deleteTask } from '../actions'

class TaskItem extends Component {
  deleteTask (task) {
    this.props.deleteTask(task)
  }

  render () {
    return (
      <View style={styles.taskStyle}>
        <Text style={styles.textStyle}>{this.props.rowData}</Text>

        <Button
          color="red"
          style={styles.buttonStyle}
          title='x'
          onPress={() => this.deleteTask(this.props.rowData)} />
      </View>
    )
  }
}

const styles = {
  taskStyle: {
    marginTop: 15,
    marginLeft: 15,
    marginRight: 15,
    paddingLeft: 10,
    paddingRight: 10,
    elevation: 2,
    borderRadius: 2,
    flex: 1,
    flexDirection: 'row',
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
    alignItems:'center'
  },
  buttonStyle: {
    alignSelf: 'flex-end',
    border: '1px solid #000',
    flex: 1,
    margin: 0,
    padding: 4
  },
  textStyle: {
    display: 'inline-block',
    flex: 3
  }
}

export default connect(null, { deleteTask })(TaskItem)
