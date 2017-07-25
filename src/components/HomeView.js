import React, { Component } from 'react'
import { View, ListView, TextInput, Button } from 'react-native'
import { connect } from 'react-redux'
import TaskItem from './TaskItem'
import { addTask, onTextChange } from '../actions'

class HomeView extends Component {
  onTextChange (text) {
    this.props.onTextChange(text)
  }

  render () {
    return (
      <View style={{ flex: 1, flexDirection: 'column' }}>
        <View>
          <TextInput
            style={{ height: 40, padding: 8 }}
            placeholder='Add a Task'
            onChangeText={this.onTextChange.bind(this)}
            value={this.props.text}
          />

          <Button title='Add' onPress={this.props.addTask} />
        </View>

        <ListView style={{ flex: 1 }}
          dataSource={this.props.tasks}
          renderRow={(rowData) => <TaskItem rowData={rowData} />}
        />
      </View>
    )
  }
}

const ListData = new ListView.DataSource({
  rowHasChanged: (r1, r2) => r1 !== r2
})

const mapStateToProps = state => {
  return {
    text: state.todo.text,
    tasks: ListData.cloneWithRows(state.todo.tasks)
  }
}

export default connect(mapStateToProps, { addTask, onTextChange })(HomeView)
