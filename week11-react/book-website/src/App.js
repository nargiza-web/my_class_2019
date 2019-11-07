import React from 'react';
import Header from './Header'
import Footer from './Footer'
import AppRouter from './AppRouter'

class App extends React.Component{
  render(){
    return(
      <>
        <Header/>
        <AppRouter/>
        <Footer/>
      </>
    )
  }
}
export default App;
