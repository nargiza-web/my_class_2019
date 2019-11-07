 import React from 'react';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state ={
      count:0,
      status: true
    }
    
    this.increment = this.increment.bind(this)
    this.decrement = this.decrement.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }
  
  
  handleChange(){
    if (this.state.status === true){
      this.increment()
    }
    else if (this.state.status === false){
      this.decrement()
    }
  }
  
  increment(){
    this.setState(prevState => ({
      count: prevState.count + 1
    }))
    
    if(this.state.count === 100) {
      this.setState(prevState => ({

        status: false
    }))
  }
  }
  
  decrement(){
    this.setState(prevState => ({
      count: prevState.count -1
    }))
    if(this.state.count === -100){
      this.setState(prevState => ({
        status: true
      }))
    }
  }
  
  componentDidMount() {
    this.interval = setInterval(()=>this.handleChange(), 100)
  
    
  }
  
  
  render(){
    return(
      <>
      <h1>{this.state.count}</h1>
      
      </>
    )
  }
}



export default App;
