
// This Component will render the Dishes Menu as a Cards 
// - get the dishes objects array as a props from parent componets (App Component)
// - loop throw these objects and render each dish
// - use the dish detail componet to render a specifi dish (the selected one)
// - if the no dish select it will render a empty div 

import React from 'react';
import { Card, CardImg, CardImgOverlay,CardTitle } from 'reactstrap';


// This is a Function Component and it will render a Card Item
function RenderMenuItem({dish,onClick}) {

    return(
        <Card onClick={()=> onClick(dish.id)}>  {/* if Card selected change the value of DishSelect */}
            <CardImg width="100%" src={dish.image} alt={dish.name} />
            <CardImgOverlay>
                <CardTitle>{dish.name}</CardTitle>
            </CardImgOverlay>
        </Card>

    );  
} 
// This is a Function Component too. and it will render a Menu Items Card

    const Menu = (props) => {
        console.log('Menu component render invoked');

        // loop throw the dishes array and render every dish as a Card Component 
        const menu =props.dishes.map( (dish) => {
            return(
                <div key ={dish.id} className="col-12 col-md-5 m-1">
                    <RenderMenuItem dish={dish} onClick={props.onClick} />
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

export default Menu ;