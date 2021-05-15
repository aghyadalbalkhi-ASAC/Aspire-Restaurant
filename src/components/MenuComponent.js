
// This Component will render the Dishes Menu as a Cards 
// - get the dishes objects array as a props from parent componets (App Component)
// - loop throw these objects and render each dish
// - use the dish detail componet to render a specifi dish (the selected one)
// - if the no dish select it will render a empty div 

import React from 'react';
import { Card, CardImg, CardImgOverlay,CardTitle,Breadcrumb, BreadcrumbItem } from 'reactstrap';
import {Link} from 'react-router-dom';
import { Loading } from './LoadingComponent';


// This is a Function Component and it will render a Card Item
function RenderMenuItem({dish,onClick}) {

    return(
        <Card >  
            <Link to={`/menu/${dish.id}`}>
                <CardImg width="100%" src={dish.image} alt={dish.name} />
                <CardImgOverlay>
                    <CardTitle>{dish.name}</CardTitle>
                </CardImgOverlay>
            </Link>
        </Card>

    );  
} 
// This is a Function Component too. and it will render a Menu Items Card

    const Menu = (props) => {
        console.log('Menu component render invoked');

        // loop throw the dishes array and render every dish as a Card Component 
        const menu =props.dishes.dishes.map( (dish) => {
            return(
                <div key ={dish.id} className="col-12 col-md-5 m-1">
                    <RenderMenuItem dish={dish}/>
                </div>
            );
        });

        if (props.dishes.isLoading) {
            return(
                <div className="container">
                    <div className="row">            
                        <Loading />
                    </div>
                </div>
            );
        }
        else if (props.dishes.errMess) {
            return(
                <div className="container">
                    <div className="row"> 
                        <div className="col-12">
                            <h4>{props.dishes.errMess}</h4>
                        </div>
                    </div>
                </div>
            );
        }
        else{
            return(
                <>
                <div className="container">
                    <div className="row">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                            <BreadcrumbItem active>Menu</BreadcrumbItem>
                        </Breadcrumb>
                        <div className="col-12">
                            <h3>Menu</h3>
                            <hr />
                        </div>                
                    </div>
                    <div className="row">
                        {menu}
                    </div>
                </div>
                </>
            );
        }   
    }

export default Menu ;