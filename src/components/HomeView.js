

import React from 'react';
import { View, ListView, Text, TextInput, Button } from 'react-native';
import { connect } from 'react-redux';
import ListItem from './ListItem';
import { addItem, onTextChange } from '../actions';


class HomeView extends React.Component {

  onTextChange(text) {
    this.props.onTextChange(text);
  }

  render() {
    return (
      <View style={{flex:1, flexDirection: 'column'}}>
        <View>
          <TextInput
            style={{height: 40}}
            placeholder="Add a To-do Item"
            onChangeText={this.onTextChange.bind(this)}
            value={this.props.text}
          />
          <Button title="Add" onPress={this.props.addItem} />
        </View>

        <ListView style={{flex: 1}}
          dataSource={this.props.items}
          renderRow={(rowData) => <ListItem rowData={rowData}/>}
        />

      </View>
    );
  }
}


const ListData = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

const mapStateToProps = state => {
  return {
    text: state.todo.text,
    items: ListData.cloneWithRows(state.todo.items)
  };
};

export default connect(mapStateToProps, {addItem, onTextChange})(HomeView);
