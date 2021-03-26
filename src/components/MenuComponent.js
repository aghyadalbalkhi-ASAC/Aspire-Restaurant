import React,{Component} from 'react';
import {Media} from 'reactstrap';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,CardTitle } from 'reactstrap';

import Dishdetail from './DishdetailComponent'

class Menu extends Component {

    constructor (props){
        super(props);

        this.state = {
            selectedDish:null,          // for Event's Select

        };
    }

    onDishSelect(dish){
            // its called when card selected and change the vlue of selectedDish on stat to the dish which select
    // if the state change then the component will be re-render again 
            this.setState({selectedDish:dish})
    }

    renderDish(dish){
            // dish its the selectedDish on state so if there is a Dish -> it will render the card
            // else if null (there isn't a dish then it will reneder a empty div)
        if(dish !=null){
            return(
                // <Card>
                //     <CardImg width="100%" src={dish.image} alt={dish.name} />
                //     <CardBody>
                //         <CardTitle>{dish.name}</CardTitle>  
                //         <CardText>{dish.description}</CardText>
                //     </CardBody>
                // </Card>
                <Dishdetail selectedDish ={dish} />
            )
        }else{
            return(
                <div> </div>
            )
        }
    }

    render(){
        const menu =this.props.dishes.map( (dish) => {
            return(
                <div key ={dish.id} className="col-12 col-md-5 m-1">
                    <Card onClick={()=> this.onDishSelect(dish)}>  {/* if Card selected change the value of DishSelect */}
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

                <div>
                    {/* call renderDish --- it render by defual as a empty div becuase the selectedDish is null  */}
                    {this.renderDish(this.state.selectedDish)}
                </div>

            </div>
            </>
        );
    }
}

export default Menu ;