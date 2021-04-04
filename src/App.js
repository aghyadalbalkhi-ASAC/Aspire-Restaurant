// App Component is Responsbel of rendering the Main Components for This Projects
// The Main Components Responsbel of rendering a specific tasks or handel another component too .


import React,{ Component } from 'react';
import Main from './components/MainComponent';
import './App.css';


class App extends Component {


  render(){
  return (
    <>
      <div className="App">
        <Main />
      </div>
    </>
  );
}
}

export default App;