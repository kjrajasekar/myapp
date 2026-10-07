import { combineReducers, createStore } from "redux";
import counterreducer from "./counterreducer";


const allreducer=combineReducers(
    {
        counter:counterreducer
    }
)

const mystore=createStore(allreducer)
export default mystore