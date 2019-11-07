import React from 'react';
import './App.css'

class App extends React.Component{
  constructor(){
    super()
    this.state ={
      count: 0
    }
    this.increment = this.increment.bind(this)
    this.decrement = this.decrement.bind(this)
  }
  
  increment(){
    this.setState(prevState =>{
      return{
      count: prevState.count +1
      }
    })
  }
  
  decrement(){
    this.setState(prevState => {
      return{
        count: prevState.count -1
      }
    })
  }
  
  render(){
    return(
      <>
        <div style = {{display: "flex" }} className="wrapper">
        <button className="btn" onClick= {this.decrement}> - </button>
        <div className="middleBox"> {this.state.count} </div> 
        <button className="btn" onClick = {this.increment}>   + </button>
        </div>
      </>
    )
  }
}

export default App;
