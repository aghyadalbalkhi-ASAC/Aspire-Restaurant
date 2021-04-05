
// This Component will render the Selected Dishes Details under the Menu Items  
// - get the dishes selected as a props from parent componets (Menu Component)
// - loop throw this dish object and render dish details and comments


import React  from 'react';
import { Card, CardImg, CardText, CardBody,CardTitle } from 'reactstrap';


function RenderDish({dish}){
            // render the dish object as a Card 
            // check if there is a dish or not 
            // if not then render an empty div
            if(dish !=null){
            return(
                <>
                    <Card>
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardBody>
                            <CardTitle>{dish.name}</CardTitle>  
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
                </>
            );
        }
        else{
        return(
            <div>

            </div>
        );}
    }
    function RenderComments({dish}){

            // render the dish object comments as a List 
            // check if there is a dish or not 
            // if not then render an empty div

                if(dish != null){
                const dishComments = dish.comments;
                const comments = dishComments.map( (dish)=>{
                    
                    return(
                        <div key= {dish.id}>
                            <li>{dish.comment}</li>
                            <br></br>
                            <li>-- {dish.author} , {dish.date}</li>
                            <br></br>
                        </div>
                    );
                });

            return(
                <div>
                    <h4>Comments</h4>
                    <ul class="list-unstyled">
                    {comments}
                    </ul>
                </div>
            );
        }

        else{
            return(
                <div></div>
                );
        }
    }

        const Dishdetail =(props) => {

            console.log('Dishdetail component render invoked');

            // render the dish object that come from presentional Component as a props 
            // Note that we applied the Bootstrap so we render the deatils inside the div row and 
            // the container div is located on Menu Compnenet
            
            return(
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <RenderDish dish={props.dish}/>
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <RenderComments dish={props.dish}/>
                    </div>
                </div>
            );
        }


export default Dishdetail;