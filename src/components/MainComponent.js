// <Main Component [Container Component] is the Component responsble of render the other Components
// that related to Menu featuer and its also responsble of passing the data for theses Components which
// called Presentional Components 

import React,{ Component } from 'react';        //Bootstrap Moduel 
import Menu from './MenuComponent';                     // Presentional Component
import DishDetail from './DishdetailComponent';          // Presentional Component
import Contact from './ContactComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import About from './AboutComponent';


import Home from './HomeComponent';

import { Switch, Route, Redirect,withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { actions } from 'react-redux-form';

// import add comment Action To make the action available
import { postComment, fetchDishes, fetchComments, fetchPromos,fetchLeaders, postFeedback } from '../redux/ActionCreators';

import { TransitionGroup, CSSTransition } from 'react-transition-group';


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


const mapDispatchToProps = (dispatch) => ({
    postComment : (dishId,rating,author,comment) => dispatch(postComment(dishId,rating,author,comment)),
    fetchDishes: () => { dispatch(fetchDishes())},
    resetFeedbackForm: () => { dispatch(actions.reset('feedback'))},
    fetchComments: () => dispatch(fetchComments()),
    fetchPromos: () => dispatch(fetchPromos()),
    fetchLeaders: () => dispatch(fetchLeaders()),
    postFeedback : (values) => dispatch(postFeedback(values))

});



class Main extends Component {

    componentDidMount() {
        this.props.fetchDishes();
        this.props.fetchComments();
        this.props.fetchPromos();
        this.props.fetchLeaders();
    }


    render(){

        
    const HomePage = () => {
        return(
            <Home 
                dish={this.props.dishes.dishes.filter((dish) => dish.featured)[0]}
                dishesLoading={this.props.dishes.isLoading}
                dishesErrMess={this.props.dishes.errMess}
                promotion={this.props.promotions.promotions.filter((promo) => promo.featured)[0]}
                promoLoading={this.props.promotions.isLoading}
                promoErrMess={this.props.promotions.errMess}
                leader={this.props.leaders.leaders.filter((leader) => leader.featured)[0]}
                leaderLoading={this.props.leaders.isLoading}
                leaderErrMess={this.props.leaders.errMess}
            />
        );
    }

    const DishWithId = ({match}) => {
        return(
                <DishDetail dish={this.props.dishes.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]}
                isLoading={this.props.dishes.isLoading}
                errMess={this.props.dishes.errMess}
                comments={this.props.comments.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))}
                commentsErrMess={this.props.comments.errMess}
                postComment={this.props.postComment}
                />
        );
    }
        return (
            <>
                <div>
                <Header />
                <TransitionGroup>
                    <CSSTransition key={this.props.location.key} classNames="page" timeout={300}>
                        <Switch>
                            <Route path='/home' component={HomePage} />             
                            <Route exact path='/menu' component={() => <Menu dishes={this.props.dishes} />} />
                            <Route path='/menu/:dishId' component = {DishWithId} />
                            <Route exact path='/contactus' component={() => <Contact resetFeedbackForm={this.props.resetFeedbackForm} postFeedback={this.props.postFeedback} />}/>

                            <Route exact path='/aboutus' component={()=> <About leaders={this.props.leaders.leaders}
                                leaderLoading={this.props.leaders.isLoading}
                                leaderErrMess={this.props.leaders.errMess} />}/>
                                
                            <Redirect to="/home" />
                        </Switch>
                    </CSSTransition>
                </TransitionGroup>
                <Footer />
                </div>
            </>
    );
}
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Main));