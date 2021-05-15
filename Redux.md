**Redux**
- Centralize applications state 
- makes data flow transparent and predictable 

# What is Redux 

 -> redux is a state management libary for js apps {we can  use it with react / Angular / Vue / Vanila Js}

# why we need a state managment libary ? 
when we work on a complex project , its hard to mange the state anb keep the UI Component in asyn way .

with redux insted of scattering application state in various parts of UI we store all the state in something called {store} . 
store -> its a single source of true  {-> store its a single js object} we can think of it like a database for frontend .

**with this artichture the diffrent parts of UI not longer maintaine thrie own state insted they get what they need from store**

**Funcational Programming**
 

----------------------------------------------------------------------------------------------------------------
# Redux Architecture

Redux {Store = reducer - actions}

## Store  - > JS Object iclude app State
Redux -> Single source of true {Store} -> Accesiable from all Components  -> can't update dirctly               || Store is Js Object 

- {

    dishes:{},
    cart:{}
}


## Reducer   - > JS Function (Event Handler)
- To update The store we need a function that take the store and return the new one 

- Reducer function (Pure Function) that take the current instance of store and return the update one 


function reducer (Store){

    return (... store)
}

- In Real Project we have one or more reducer where each one responsible For update a specife slice of store such as {dishes}  

## Actions  - > JS Object (Events)
- How the reduce know what propirtes in store should update ? - > so thats why we need an action 

- Actions -> descripe whats happen or what should be update in store 





## Work Flow 

The Store Object has {dispatch} method that takes an action and foward the action to reducer


{Actions} --- dispatch ---->    {store} ------1-----> {reducer}
                                        <------2------


---------------------------------------------------------------------------------------------------------------

when dispatch an action -> the store call the reducer and give it the current state and the action dispatched  -> based on the type of action we will get the new state 

// dispatch (action) -> call the reducer
// state = reducer (state,action)

To make it more clear just think of it like this : 

// state is -> []
function reducer (state=[],action){

    switch(action.type)
    .... some code ...

    return (... store)
}


        const store = createStore(reducer);

const addComment = {
    type : "Add_Comment" 
    payload:{                      
        description:""
    }
}
        store.dispatch(addComment);


----------------------------------------------------------------------------------------------------------------
# Build Redux Application


- Design The Store          -> The state of our application  
- Define The actions        -> what are the actions that can user perform application
- Crate a reducer           -> To deal with action and update the state
- Set Up The store          -> based on reducer     -> using createStore function and its take a reducer function as argument and return the {store} ojbect
        const store = createStore(reducer);
        export store;



----------------------------------------------------------------------------------------------------------------

# Redux Middleware 

- Provide the capability to run code after the action is dispatched and before it reaches the reducer 
- This is the place where we can use third party injection such as loggin or async API Calls


### Midleware used for : 
    - inspecting the actions and the state
    - Modify actions
    - Dispatch other actions
    - stop actions from reaching the reducers

### use Midleware in Our app :
    - use applyMidleware() function
    - sets up the midleware pipeline 
    - returns a `store enhancer` that is passed to createStore()

------------------------------------------------------------------------------------------------------------    

# Redux Thunk

is a Midleware that allow to wirte action creators that reutrn a function insted of an action 

### Thunk used for :
    - Delay the dispatch of an action 
    - Dispatch only if a certion condition is met .
    - useful for complex synchronous logic
        * Multiple dispatches
        * Conditional dispatches
        * Simple Async logic 

### inner function of Thunk :
    - receives the dispatch () and getState() sotre methods


