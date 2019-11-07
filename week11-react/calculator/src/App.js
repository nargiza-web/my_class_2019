import React from 'react';
import ResultComponent from './components/ResultComponent'
import KeypadComponent from './components/KeypadComponent'
import './App.css'

class App extends React.Component {
  constructor(){
    super()
    this.state ={ 
      result: ""
    }
  }
  
  claculate = () => {
  try{
    this.setState({
      result: (eval(this.state.result) || "") + ""
    })
  } catch (e) {
    this.setState({
      result: "error"
    })
  }
  }
  
  
  reset = () => {
    this.setState({
      result: ""
    })
  }
  
  backspace = () => {
    this.setState({
      result:this.state.result.slice(0, -1)
    })
  }
  
  onClick = button => {
    if(button === "="){
      this.claculate()
    }
    else if(button === "C"){
      this.reset()
    }
    else if( button === "CE"){
      this.backspace()
    }
    else {
      this.setState({
        result : this.state.result + button
      })
    }
  }

  render(){
    return(
      <>
      <div className="calculator">
        <h1>Simple Calculator</h1>
        <ResultComponent result={this.state.result}/>
        <KeypadComponent onClick ={this.onClick}/>
        </div>
       
      </>
    )
  }
}

export default App;
