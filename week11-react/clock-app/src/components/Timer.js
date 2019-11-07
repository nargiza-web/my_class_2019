import React from 'react'

class Timer extends React.Component {
    constructor(){
        super()
        this.state ={
            seconds: 1,
            min: 1,
            message: "starting countdown"
        }
        
        this.decrement = this.decrement.bind(this)
    }
    
    intervalHandle;
    
    decrement(){
        if(this.state.min === 0 && this.state.seconds === 0){
            clearInterval(this.intervalHandle)
            this.setState({
                message: "Timer is done"
            })
         }
        
        else if(this.state.seconds === 0){
            this.setState(prevState => ({
                min: prevState.min -1,
                seconds: 60
            }))
        }
        this.setState(prevState => ({
            seconds: prevState.seconds -1
        }))
        
    }
    
   componentDidMount(){
       this.intervalHandle = setInterval(() => this.decrement(), 1000)
   }
   
   componentWillUnmount(){
       clearInterval(this.intervalHandle)
   }
    
    render(){
        return(
            <>
                <h1>{this.state.min} : {this.state.seconds}</h1>
                <h2>{this.state.message}</h2>
            </>
        )
    }
}

export default Timer