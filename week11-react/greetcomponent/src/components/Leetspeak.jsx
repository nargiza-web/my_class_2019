import React from 'react'

class Leetspeak extends React.Component {
    constructor(){
        super()
        this.state = {
        }
    }
   
    toLeetSpeak = (props) => {
        const newName = this.props.name.toLowerCase()
        const newArray = newName.split("")
        const leetSpeak = newArray.map(letter => {
            if(letter === "a") return "4";
            else if (letter==="b") return "8";
            else if(letter === "e") return "3";
            else if(letter ==="f") return "ph";
            else if(letter === "g") return "6";
            else if(letter === "i") return "1";
            else if(letter === "o") return "0";
            else if(letter === "s") return "5";
            else if (letter === "t") return '7';
            else {return letter}
        })
        const finalText = leetSpeak.join("").toUpperCase()
        return <h1>{finalText}</h1>
        
    }
    
    render(){
        return(
            <>
                {this.toLeetSpeak()}
            </>
        )
    }
}

export default Leetspeak