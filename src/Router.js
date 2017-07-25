import React from 'react'
import { Router, Scene } from 'react-native-router-flux'
import HomeView from './components/HomeView'

const App = () => (
  <Router>
    <Scene key='root'>
      <Scene key='main' component={HomeView} title='To-do List' />
    </Scene>
  </Router>
)

export default App
