import './App.css'
import React from 'react'

import Weather from './components/Weather'
import Tasks from './components/Tasks'
import Mock2 from './components/Mock2'

function App() {
  return (
    <div className="App">
      <Weather />
      <Tasks />
      <Mock2 />
      <Mock2 />
    </div>
  );
}

export default App;
