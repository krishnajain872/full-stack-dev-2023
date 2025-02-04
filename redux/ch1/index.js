// console.log("hello world")
import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger"

// Action name constants
const INC = "INCREMENT"
const DEC = "DECREMENT"


const store = createStore(reducer, applyMiddleware(logger.default))

function reducer(state = { amount: 0 }, action) {
    if (action.type == "INCREMENT") {
        // console.log("state should be performed with some action ")
        // immutable it means here we return a copy of the state other wise it will cause to mutate or change the global initial state or previous state 
        return { amount: state.amount + action.payload }
    }
    if (action.type == "DECREMENT") {
        return { amount: state.amount - action.payload }
    }
    return state
}


// action
// {type:INCREMENT}  action is a object which have a type and payload although action can consist of other values too according to the use case

// how to send action to the redux store so for that we use dispatch
// store.dispatch({ type: "INCREMENT", payload: 1 })


// global state 
// store.subscribe(() => { //when ever a reducer funtion executes this subscribe funtion from store will run automatically
//     history.push(store.getState())
//     console.log(store.getState())
// })

// create ACTION funtions

function Increment(value) {
    return { type: INC, payload: value }
}

function Decrement(value) {
    return { type: DEC, payload: value }
}


const history = []
setInterval(() => {
    // store.dispatch({ type: "INCREMENT", payload: 100 })
    // store.dispatch({ type: "DECREMENT", payload: 100 })
    store.dispatch(Increment(20))
}, 4000)
// setTimeout(() => { console.log(history) }, 10000)
