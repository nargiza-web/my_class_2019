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


/**
 * Other modern/advanced React features/topics to learn:
 * 
 * Official React Context API - https://reactjs.org/docs/context.html
 * Error Boundaries - https://reactjs.org/docs/error-boundaries.html
 * render props - https://reactjs.org/docs/render-props.html
 * Higher Order Components - https://reactjs.org/docs/higher-order-components.html
 * React Router - https://reacttraining.com/react-router/core/guides/philosophy
 * React Hooks - https://reactjs.org/docs/hooks-intro.html
 * React lazy, memo, and Suspense - https://reactjs.org/blog/2018/10/23/react-v-16-6.html
 */