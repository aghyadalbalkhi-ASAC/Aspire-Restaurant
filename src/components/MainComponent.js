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


import Home from './HomeComponent';

import { Switch, Route, Redirect,withRouter } from 'react-router-dom';
import { connect } from 'react-redux';


//will map the Redux Store's state into props that will become available to my component.

// map all the state , the same way that we did it in state before convert to redux ..
// for example dishes will become available from my Redux Store's state..
//this state that we am obtaining here (in header) is the state from my Redux Store.

const mapStateToProps = state => {

    //These are derived from the Redux's Stores by connecting this component to the Redux Store.
    return {
        dishes: state.dishes,        
        comments: state.comments,   
        promotions: state.promotions,
        leaders: state.leaders
    }
}

class Main extends Component {

    constructor(props){
        super(props);
    }



    render(){

        
    const HomePage = () => {
        return(
            <Home
                dish={this.props.dishes.filter((dish) => dish.featured)[0]}
                promotion={this.props.promotions.filter((promo) => promo.featured)[0]}
                leader={this.props.leaders.filter((leader) => leader.featured)[0]}
            />
        );
    }

    const DishWithId = ({match}) =>{

        return(
            <Dishdetail dish={this.props.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]}
            comments={this.props.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))} 
            />
        );

    };
        console.log('main',this.props.leaders)
        return (
            <>
                <div>
                <Header />
                <Switch>
                    <Route path='/home' component={HomePage} />             
                    <Route exact path='/menu' component={() => <Menu dishes={this.props.dishes} />} />
                    <Route path='/menu/:dishId' component = {DishWithId} />
                    <Route exact path='/contactus' component={Contact}/>
                    <Route exact path='/aboutus' component={()=> <About leaders={this.props.leaders} />}/>
                    <Redirect to="/home" />
                </Switch>
                <Footer />
                </div>
            </>
    );
}
}

export default withRouter(connect(mapStateToProps)(Main));