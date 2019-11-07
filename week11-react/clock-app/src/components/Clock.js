import React from 'react'

export default class Clock extends React.Component{
    constructor(){
        super()
        this.state ={
            time: new Date()
        }
    }
    
    componentDidMount(){
        this.variable = setInterval(()=>{
            this.setState({time: new Date()})
        }, 1000)
    }
    
    componentWillUnmount(){
        clearInterval(this.variable)
    }
    
    render(){
        return(
            <>
            <h1>The time now is: </h1>
            <h1>{this.state.time.toLocaleTimeString()}</h1>
            </>
        )
    }
}