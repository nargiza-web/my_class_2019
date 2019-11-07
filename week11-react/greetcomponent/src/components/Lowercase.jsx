import React from 'react'

class Lowercase extends React.Component {
    
    render () {
        return(
            <>
                <h1>{this.props.name.toLowerCase()}</h1>
            </>
        )
    }
}


export default Lowercase