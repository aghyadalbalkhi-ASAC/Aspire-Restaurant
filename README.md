# React Learning journey 

* [The Demo URl](https://aspire-restaurant.vercel.app/)

> Topics Coverd

- **Get start with react and create React App** `create-react-app confusion`.
    * To use npm insted of yarn 
    ```
        You can either

        1) Remove yarn.lock, and running npm i,

        or

        2) Run create-react-app app --use-npm
    ```

- **Introduction to JSX**

- **Configuring React Application to use  ` Reactstrap `  (a package supporting easy to use React based Bootstrap 4 components)**

```

        npm install bootstrap 
        npm install reactstrap 
        npm install react-popper 

```

- **Configure to use Bootstrap 4**

*In index js import this line before import  index css file*

`       import 'bootstrap/dist/css/bootstrap.min.css';      `

- **React Components**
    * class Components
    * Functions Components 
    * React Element
    * state and props

- **Lifecycle Methods Part**
*React Componet go through the lifecycle stage :*

    
    *in the mounting stage, these methods that are available invoked when an instance of a component is created and inserted into the DOM*

    1. Mounting

        * constructor        - > initializing the state for the component
        * getDerivedStateFromProps
        * render 
        * componentDidMount   - > called after componet added to DOM , if we want to do something after the component is mounted into the DOM 


    *When a component is being updated, there are several lifecycle methods associated with this process.these lifecycle methods are called when a component is being re-rendered or being updated*

    `   this could be caused either because the props that are supplied to the component changed,or the internal state of the component changed.`
    
    - - -


    2. Updating

        * getDerivedStateFromProps
        * shouldComponentUpdate     -> return a Boolean variable
        * render 
        * getSnapshotBeforeUpdate
        * componentDidUpdate           -> invoked when the component is updated.

    - - -

    
    3. UnMounting

- **React Component Types**
    - Presentational Components          -> concerned of the look and feel of app (view)
    - Container Components           -> deal with the state, provide the data and handle user interactions
    - Functional Components         -> recive a props as a parameter   - No Local state  No lifecycle Hooks
 
- **React Router**

    *Installing and Configuring React Router*

    `npm install react-router-dom --save`

    *Configuring React app by import BrowserRouter in App.js*

    `import { BrowserRouter } from 'react-router-dom';`

    **Note** All Router should be inside BrowserRouter Component so its doesnt matter if the BrowserRouter and Routers in the same Component (Page) of in another one (must in Parent Componets so all the routers will be inside parent)

    ```
     # This is a App Componet 

        <BrowserRouter>
            <div className="App">
              <Main />
            </div>
        </BrowserRouter>

     # This is a App Main

                <Switch>                        // it stop searching when path matching found 
                    <Route path='/home' component={HomePage} />
                    <Route exact path='/menu' component={() => <Menu dishes={this.state.dishes} />} />
                    <Redirect to="/home" />
                </Switch> 

    # So the Switch and Routes are inside the BrowserRouter component and we can put BrowserRouter in Main
    # component but the Switch andd Route should be inside BrowserRouter like this
       
        <BrowserRouter>
                <Switch>                
                    <Route path='/home' component={HomePage} />
                    <Route exact path='/menu' component={() => <Menu dishes={this.state.dishes} />} />  
                    <Redirect to="/home" />
                </Switch> 
        </BrowserRouter>

    ```

- **React Router: Parameters**
    *path aslo can carry a Parameters*
    *Parameters spcified in the path  specification as a token*

    ```
        /menu/42
        /menu/:id      - > id is the Token

         # So, the key will be id and value will be 42.

    ```

    *Router Parameters can be spcified using `link`* === *The same can be use with `NavLink`*

    `<Link to ={`/menu/${dish.id}`}`

    **Note :** *when this happen route component passes `three` pass props to the component which it is rendered*

    - match - > Match is the one that carries the route parameters inside it as its own properties.
    - location -> where you are in the URL location.
    - history  -> will allow you to go back.

    *This `match object` enables us to determine a path .So, when you specify various route parameters, these become available through the match object as params,*

    *match.params, you'll be able to get access to all the params, as a `key value pair` .So, param is associated with a key value pitch*

- **Single Page Applications**
*A single-page application is a web application or a website that fits into a single page.*
    - No need to reload the entire page every single time a user interacts with the application. 
    - The UX is more like a desktop or a native application.
    - Most of the resources required for your application are downloaded at the first instance itself by the first page load
    - only parts of the page are redrawn based upon how the user interaction happens without requiring a full server roundtrip


- **Controlled Forms**

[Controlled vs UnControlled](https://medium.com/swlh/controlled-and-uncontrolled-components-in-react-e078bb1f7efd)

`in a controlled component, form data is handled by a React component. The alternative is uncontrolled components, where form data is handled by the DOM itself`

- *forms are a very standard approach for users to input data for your application*
-   *A way of setting up forms in your React Application whereby your form `information is directly tied into the state of your React component that is hosting the form`*
-  *any changes that you make to your form imports will be immediately reflected into the state*

- *every one of these form elements in HTML maintain their own state within DOM. And then they will update it based on user input*

- *we want to be able to connect that into our React components state, so that any changes to a box will be immediately reflected into React component state.*

- *with the control component, every state mutation, anytime you change any of the state, it will have to be reflected into the state of your React component. So you need appropriate handler functions that will enable change*.

- *if there is any change in a box, then that change should be immediately reflective to the state of your React component*

**To deal with component we need to import `Button, Form, FormGroup,Label, Input and Col.` from reactstrap.**
- ->> This will be in Class Component Coz we need the state of the component to store the state of form 

- ->> define the state which reflects the information from the form that we are going to create for example

```
this.state = {
            firstname: '',
            lastname: '',
            telnum: '',
            email: ''

            }

```
*so, with this, we have set up all the properties within our state that can then be linked to our form*

- to `create a form`, we will start off by defining a form within this div here, and in this `form`

- we will use `FormGroup` that allows us to define that as a row so this is one row of the form and an elements like Label or input will be inside this FormGroup .So, this FormGroup row allows us to use bootstrap's grid inside the form to lay out the various form elements. 

- -->> implement two different handlers that will take care of handling this Form `handleInputChange` which will receive the event as a parameter and `handleSubmit` which also receives the event as a parameter. So, when you click on the Submit Button, the handler Submit should the called.

- The default behavior when you submit a Form in any browser is to go to the next page. So, we will prevent that from happening. So, we will say the `event.preventDefault` behavior.

- in order to make this handleSubmit and handleInputChange methods available for use like the way we did with the form, we need to `bind` `this` in the constructor. 

```
this.handleInputChange = this.handleInputChange.bind(this);
this.handleSubmit = this.handleSubmit.bind(this);

```
-  the handleInputChange method, we'll make sure that this is invoked upon any change to any input value in our form. When this is invoked, then we will retrieve the target input from the event that has just been parsed in. So this event will carry which particular input has been changed.

```
   handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
            [name]: value
        });
    }

```
**make sure that you have value Attribute in input element and the defualt value is the state value that reflect this input element**

```
                            <FormGroup row>
                                <Label htmlFor="lastname" md={2}>Last Name</Label>
                                <Col md={10}>
                                    <Input type="text" id="lastname" name="lastname"
                                        placeholder="Last Name"
                                        value={this.state.lastname}
                                        onChange={this.handleInputChange} />
                                    <FormFeedback>{errors.lastname}</FormFeedback>
                                </Col>
                            </FormGroup>

```

- **Uncontrolled Components**

*Sometimes you will wish to have a very simple form with a very limited amount of interaction of that with your React component. In that case an uncontrolled form is a much easier way of setting up forms within your React application*

*This type of component is best suited when you have a simple form where you need to get the value of the inputs one time (e.g. on submit) or that doesn’t perform any kind of UI change when the value of the inputs changes.*

**Use Cases**

    - Creating inputs on the fly
    - Enforcing formats (phone numbers, credit cards, etc.)
    - Updating the UI when the value of the inputs changes like showing errors if the input value is wrong as the user is typing, disabling the submit button if the values have errors, etc.

- Now every, DOM form element has a `ref` associated with it, from which you can easily use thatch to extract their HTML form data into your application. 

**this approach of using uncontrolled forms is a lot more easier in situations when you are mixing your React application code with non-React code.**

- > we will use uncontroller form to setup a login form in header component
    - first step we will create a `modal` using the reactstrap `modal component`. 
    - Import `Modal,ModalHeader,ModalBody` from reactstrap
    - setup your modal and put your form inside ModalBody
    - setup the `toggleModal` inside Modal and ModalHeader and set a defualt `isModalOpen: false` in component state 
    - define `toggleModal function ` to setState of `isModalOpen` when click modal 

--------------------------------------------------------------

**Introduction to Redux**

- Install and Configure Redux in your application
- Enable your React app to make use of Redux

- ** MVC The Model-View-Controller Framework**
<!-- This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). -->



## Contact Info : 
**Please Feel Free To Contact Me When You Need help ^_^**
* [www.facebook.com/aghyadalbalkhi](www.facebook.com/aghyadalbalkhi)
* Email : aghyadalbalkhi@gmail.com