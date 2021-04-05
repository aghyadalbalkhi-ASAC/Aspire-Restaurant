
// This Component will render the Dishes Menu as a Cards 
// - get the dishes objects array as a props from parent componets (App Component)
// - loop throw these objects and render each dish
// - use the dish detail componet to render a specifi dish (the selected one)
// - if the no dish select it will render a empty div 

import React,{Component} from 'react';
import {Media} from 'reactstrap';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,CardTitle } from 'reactstrap';



class Menu extends Component {

    constructor (props){
        super(props);
        console.log('Menu component constructor invoked');
    }

    componentDidMount(){
        console.log('Menu component componentDidMount invoked');
    }

    render(){
        console.log('Menu component render invoked');

        // loop throw the dishes array and render every dish as a Card Component 
        const menu =this.props.dishes.map( (dish) => {
            return(
                <div key ={dish.id} className="col-12 col-md-5 m-1">
                    <Card onClick={()=> this.props.onClick(dish.id)}>  {/* if Card selected change the value of DishSelect */}
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardImgOverlay>
                            <CardTitle>{dish.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        });
        return(
            <>
            <div className="container">
                <div className="row">
                    {menu}
                </div>
            </div>
            </>
        );
    }
}

export default Menu ;