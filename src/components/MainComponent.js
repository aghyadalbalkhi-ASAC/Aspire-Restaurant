// <Main Component [Container Component] is the Component responsble of render the other Components
// that related to Menu featuer and its also responsble of passing the data for theses Components which
// called Presentional Components 

import React,{ Component } from 'react';        //Bootstrap Moduel 
import Menu from './MenuComponent';                     // Presentional Component
import Dishdetail from './DishdetailComponent'          // Presentional Component
import Header from './HeaderComponent';
import Footer from './FooterComponent';
// Import Dishes Data from dishes Component 
import { DISHES } from '../shared/dishes';              // Data Shared Component

class Main extends Component {

    constructor(props){
        super(props);
        this.state={
            dishes:DISHES,                  // shared Data
            selectedDish:null               // its for lifting Up from Child Component by passing Event as props
        };
    }

    onDishSelect(dishId){
// its called when card selected and change the value of selectedDish on stat to the dish ID which select
// if the state change then the component will be re-render again 
        this.setState({selectedDish:dishId})
}

    render(){

        return (
            <>
                <div>

                <Header />
            
                {/* Render The Menu  Component and pass the dishes array as a props*/}
                {/* passing a fuctional varible as a props [onClick] and use this varible on child on
                click event to run a function on parent component and pass the data as a parameter
                of this function to change the stat of parenet component  -- its a trick*/}

                {/* To understand this we can change the name of onClick Props for anything like 'vv' and
                use 'vv' props in child and it will work perfect */}
                
                <Menu dishes={this.state.dishes}
                onClick={(dishId)=> this.onDishSelect(dishId)} />

                {/* its responsble of rendering the dish selected Details and it pass the selected dish as
                props by using filter to pick the specifi dish using the dish id that came from
                onDishSelect fucttion onClick Event*/}
                
                <Dishdetail dish={this.state.dishes.filter((dish)=> dish.id === this.state.selectedDish)[0]} />
                <Footer />
                </div>
            </>
    );
}
}

export default Main;