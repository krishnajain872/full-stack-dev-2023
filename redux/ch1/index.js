// console.log("hello world")
import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger"
// import logger

// , applyMiddelware(logger.default)
// store
const store = createStore(reducer, applyMiddleware(logger.default))

function reducer(state = { amount: 1 }, action) {
    if (action.type == "INCREMENT") {
        // console.log("state should be performed with some action ")
        // immutable it means here we return a copy of the state other wise it will cause to mutate or change the global initial state or previous state 
        return { amount: state.amount + 1 }
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
const history = []
setInterval(() => {
    store.dispatch({ type: "INCREMENT", payload: 1 })
}, 4000)
// setTimeout(() => { console.log(history) }, 10000)
