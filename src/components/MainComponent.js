// <Main Component [Container Component] is the Component responsble of render the other Components
// that related to Menu featuer and its also responsble of passing the data for theses Components which
// called Presentional Components 

import React,{ Component } from 'react';        //Bootstrap Moduel 
import Menu from './MenuComponent';                     // Presentional Component
import Dishdetail from './DishdetailComponent'          // Presentional Component
import Contact from './ContactComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import About from './AboutComponent';
// Import Dishes Data from dishes Component 
import { DISHES } from '../shared/dishes';              // Data Shared Component
import { COMMENTS } from '../shared/comments';
import { PROMOTIONS } from '../shared/promotions';
import { LEADERS } from '../shared/leaders';

import Home from './HomeComponent';

import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component {

    constructor(props){
        super(props);
        this.state={
            dishes:DISHES,                  // shared Data
            comments: COMMENTS,
            promotions: PROMOTIONS,
            leaders: LEADERS
        };
    }

    render(){

        
    const HomePage = () => {
        return(
            <Home
                dish={this.state.dishes.filter((dish) => dish.featured)[0]}
                promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
                leader={this.state.leaders.filter((leader) => leader.featured)[0]}
            />
        );
    }

    const DishWithId = ({match}) =>{

        return(
            <Dishdetail dish={this.state.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]}
            comments={this.state.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))} 
            />
        );

    };
        console.log('main',this.state.leaders)
        return (
            <>
                <div>
                <Header />
                <Switch>
                    <Route path='/home' component={HomePage} />             
                    <Route exact path='/menu' component={() => <Menu dishes={this.state.dishes} />} />
                    <Route path='/menu/:dishId' component = {DishWithId} />
                    <Route exact path='/contactus' component={Contact}/>
                    <Route exact path='/aboutus' component={()=> <About leaders={this.state.leaders} />}/>
                    <Redirect to="/home" />
                </Switch>
                <Footer />
                </div>
            </>
    );
}
}

export default Main;