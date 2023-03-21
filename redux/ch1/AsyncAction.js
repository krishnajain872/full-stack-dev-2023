// console.log("hello world")
import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger"
import thunk from "redux-thunk"

// Action name constants
const INC = "INCREMENT"
const DEC = "DECREMENT"

// store
const store = createStore(reducer, applyMiddleware(logger.default, thunk.default))

// reducer funtion
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



// create ACTION funtions

function Increment(value) {
    return { type: INC, payload: value }
}

function Decrement(value) {
    return { type: DEC, payload: value }
}


const history = []
setInterval(() => {

    store.dispatch(Increment(20))
}, 4000)

