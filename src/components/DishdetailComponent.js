
// This Component will render the Selected Dishes Details under the Menu Items  
// - get the dishes selected as a props from parent componets (Menu Component)
// - loop throw this dish object and render dish details and comments


import React , {Component}  from 'react';
import { Card, CardImg, CardText, CardBody,CardTitle, Breadcrumb, BreadcrumbItem,Button,Col, Row,Modal,ModalHeader,ModalBody,Label } from 'reactstrap';
import { Link } from 'react-router-dom';
import {Control, LocalForm,Errors} from 'react-redux-form';



const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);

class CommentForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isModalOpen: false
        };

        this.toggleModal = this.toggleModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    handleSubmit(values) {
        this.toggleModal();
        this.props.addComment(this.props.dishId, values.rating, values.author, values.comment);
    }


    render(){

        return(
            <>
                <div className="container">
                    <div className="row">
                        <Button outline onClick={this.toggleModal}><span className="fa fa-edit fa-lg"></span> Submit Comment</Button>
                    </div>
                    <div className="row row-content">
                        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                            <ModalHeader toggle={this.toggleModal}> Submit Comment</ModalHeader>
                            <ModalBody>
                                <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                                    <Row className="form-group">
                                        <Label htmlFor="rating" md={12}>Rating</Label>
                                        <Col md={12}>
                                            <Control.select model=".rating" name="rating"
                                                className="form-control">
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
                                            </Control.select>
                                        </Col>
                                    </Row>
                                    <Row className="form-group">
                                        <Label htmlFor="author" md={12}>Your Name</Label>
                                        <Col md={12}>
                                            <Control.text model=".author" id="author" name="author"
                                                placeholder="Your Name"
                                                className="form-control" // Bootstrap class
                                                validators={{
                                                    required, minLength: minLength(3), maxLength: maxLength(15)
                                                }}
                                                />
                                            <Errors
                                                className="text-danger"
                                                model=".author"
                                                show="touched"
                                                messages={{
                                                    required: 'Required',
                                                    minLength: 'Must be greater than 2 characters',
                                                    maxLength: 'Must be 15 characters or less'
                                                }}
                                            />
                                        </Col>
                                    </Row>
                                    <Row className="form-group">
                                        <Label htmlFor="comment" md={12}>Comment</Label>
                                        <Col md={12}>
                                            <Control.textarea model=".comment" id="comment" name="comment"
                                                rows="5"
                                                className="form-control"/>
                                        </Col>
                                    </Row>
                                    <Button type="submit" value="submit" color="primary">Submit</Button>
                                </LocalForm>
                            </ModalBody>
                        </Modal>
                    </div>
                </div>
            </>
        );
        
    }

    


}

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

function RenderComments({comments , addComment , dishId}){

            // render the dish object comments as a List 
            // check if there is a dish or not 
            // if not then render an empty div
                console.log(comments);
                if(comments != null){
                const dishComments = comments.map( (dish)=>{
                    
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
                    {dishComments}
                    </ul>
                    <CommentForm dishId = {dishId} addComment={addComment} />
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
                <div className="container">
                    <div className="row">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                            <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                        </Breadcrumb>
                        <div className="col-12">
                            <h3>{props.dish.name}</h3>
                            <hr />
                        </div>                
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-5 m-1">
                            <RenderDish dish={props.dish}/>
                        </div>
                        <div className="col-12 col-md-5 m-1">
                            <RenderComments comments={props.comments}
                            addComment = {props.addComment}
                            dishId = {props.dish.id}
                            />

                        </div>
                        
                    </div>
                </div>
                
            );
        }


export default Dishdetail;