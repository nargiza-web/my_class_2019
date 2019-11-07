import React from 'react'
class Alarm extends React.Component {
   constructor(){
       super()
       this.state ={
           date: new Date(),
           h: 16,
           m: 24,
           message: "your alarm started"
       }
        this.setAlarm = this.setAlarm.bind(this)
   }
   intervalHandle;
   setAlarm(){
       
       const dt = new Date()
       const hour = dt.getHours()
       
       const mns = dt.getMinutes()
       this.setState({
           date: dt
       })
       if (hour === this.state.h && mns === this.state.m){
           clearInterval(this.intervalHandle)
           this.setState({
               message : "your alarm is beeping, beep, beep, beep"
           })
       }
   }
   componentDidMount(){
       this.intervalHandle = setInterval(() => this.setAlarm(), 1000)
   }
   componentWillUnmount(){
       clearInterval(this.intervalHandle)
   }
   render(){
       return(
           <>
               <h1>{this.state.date.toLocaleTimeString()}</h1>
               <h2>{this.state.message}</h2>
           </>
       )
   }
}
export default Alarm