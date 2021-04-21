// App Component is Responsbel of rendering the Main Components for This Projects
// The Main Components Responsbel of rendering a specific tasks or handel another component too .


import React,{ Component } from 'react';
import Main from './components/MainComponent';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';

const store = ConfigureStore();
class App extends Component {


  render(){
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <Main />
          </div>
        </BrowserRouter>
      </Provider>
    </>
  );
}
}

export default App;