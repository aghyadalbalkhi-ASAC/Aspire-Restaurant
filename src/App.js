import React,{ Component } from 'react';
import {Navbar,NavbarBrand} from 'reactstrap'
import Menu from './components/MenuComponent';
import './App.css';

// Import Dishes Data from dishes Component 
import {DISHES} from './shared/dishes';

class App extends Component {

      constructor(props){
        super(props);
        this.state={
          dishes:DISHES
        };
      }

  render(){
  return (
    <>
        <div>
          {/* Nav Bar using reactstrap */}
          <Navbar dark color="primary">
            <div className="container">
              <NavbarBrand href="/"> Aspire Restaurant </NavbarBrand>
            </div>
          </Navbar>
          <Menu dishes={this.state.dishes} />
        </div>
    </>
  );
}
}

export default App;