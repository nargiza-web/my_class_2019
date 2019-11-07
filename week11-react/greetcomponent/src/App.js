import React from 'react';
import './App.css';
import Lowercase from './components/Lowercase'
import Leetspeak from './components/Leetspeak'
import Caesar from './components/Caesar'

class App extends React.Component {
  render(){
    return(
      <>
        <Lowercase name="Nargiza"/>
        <Leetspeak name="NaRgiza"/>
        <Caesar name="Someone"/>
      </>
    )
  }
} 



export default App;
