import React from 'react'

class Ceaser extends React.Component{
    constructor(){
        super()
        this.state ={
            
        }
    }
    handleChange = (props) => {
        const newText = this.props.name.toUpperCase()
        const splitted = newText.split("")
        const mappedText = splitted.map(letter => {
            if(letter.charCodeAt()>= 65 && letter.charCodeAt() <= 90){
                if(letter.charCodeAt()+ 13 > 90){
                    // -1 is coming from charCode() index stuff
                    return String.fromCharCode(letter.charCodeAt()+ 13 -1 - 90 +65);
                }else if(letter.charCodeAt()+ 13 <= 90){
                    return String.fromCharCode(letter.charCodeAt()+13)
                }
                return ""; // this is for characters like '.,/'
            }
            return letter; 
        }).join("");
        return <h1>{mappedText}</h1>;
    }
    
    render(){
        return(
            <>
                {this.handleChange()}
            
            </>
        )
    }
}

export default Ceaser