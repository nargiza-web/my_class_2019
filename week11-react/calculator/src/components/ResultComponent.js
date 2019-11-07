import React from 'react'
import '../App.css'

class ResultComponent extends React.Component {
    render(){
        let {result} = this.props;
        return(
            
            <div className="display">{result}</div>
        )
    }
}

export default ResultComponent