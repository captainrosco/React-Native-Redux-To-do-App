import React from 'react';
import { Text, Button, View } from 'react-native';
import { connect } from 'react-redux';
import { delItem } from '../actions';

class ListItem extends React.Component {
  delItem(text) {
    this.props.delItem(text);
  }


  render() {
    console.log(this.props.rowData);

    return (
      <View style={styles.itemStyle}>
        <Text style={styles.textStyle}>{this.props.rowData}</Text>
        <Button style={styles.buttonStyle} title="x" onPress={() => this.delItem(this.props.rowData)} />
      </View>
    );
  }
}

const styles={
  itemStyle: {
    marginTop: 15,
    marginLeft: 15,
    marginRight: 15,
    padding: 3,
    elevation: 2,
    borderRadius: 2,
    flex:1,
    flexDirection:'row'
  },
  buttonStyle: {
    flex:1,
    alignSelf: 'flex-end',
    margin: 5,
    padding: 2
  },
  textStyle: {
    flex:3
  }
}

export default connect(null, {delItem})(ListItem);
