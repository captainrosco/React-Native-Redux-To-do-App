import React from 'react';
import { AppRegistry } from 'react-native';
import Router from './src/Router';
import { Provider } from 'react-redux';
import { createStore } from 'redux'
import reducers from './src/reducers';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={createStore(reducers)}>
        <Router />
      </Provider>
    );
  }
}


AppRegistry.registerComponent('simpleapp', () => App);