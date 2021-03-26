import React,{Component} from 'react';
import { Card, CardImg, CardText, CardBody,CardTitle } from 'reactstrap';

class Dishdetail extends Component{

        constructor(props){
            super(props);
            this.state ={
            };
        }


        renderDish(dish){
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

        renderComments(dishComments){
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

        render(){

            const dish = this.props.selectedDish;
            return(
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        {this.renderDish(dish)}
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        {this.renderComments(dish.comments)}
                    </div>
                </div>
            );
        }
}


export default Dishdetail;