# React Learning journey 

> Topics Coverd

- **Get start with react and create React App** `create-react-app confusion`.

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

                <Switch>
                    <Route path='/home' component={HomePage} />
                    <Route exact path='/menu' component={() => <Menu dishes={this.state.dishes} />} />
                    <Redirect to="/home" />
                </Switch> 

    # So the Switch and Routes are inside the BrowserRouter component and we can put BrowserRouter in Main
    # component but the Switch andd Route should be inside BrowserRouter like this
       
        <BrowserRouter>
                <Switch>                // it stop searching when path matching found 
                    <Route path='/home' component={HomePage} />
                    <Route exact path='/menu' component={() => <Menu dishes={this.state.dishes} />} />
                    <Redirect to="/home" />
                </Switch> 
        </BrowserRouter>

    ```

- **Single Page Applications**
*A single-page application is a web application or a website that fits into a single page.*
    - No need to reload the entire page every single time a user interacts with the application. 
    - The UX is more like a desktop or a native application.
    - Most of the resources required for your application are downloaded at the first instance itself by the first page load
    - only parts of the page are redrawn based upon how the user interaction happens without requiring a full server roundtrip
    

<!-- This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). -->