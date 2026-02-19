import { useReducer } from "react"



const Myreducer=()=>{
    const counter=(state, action)=>{
        switch(action.type){
            case "in":
                return state+1
            case "de":
                return state-1
            case "m":
                return state*action.data
            default:
                return state
                
        }

    }

    const [count, dispatch]=useReducer(counter , 0)

    return (
        <div>
        <h1>use reducer sample</h1>
        <p>count value {count}</p>
        
        <button onClick={()=>dispatch({type:"in"})}>click me</button>
        <button onClick={()=>dispatch({type:"de"})}>click </button>
        <button onClick={()=>dispatch({type:"m", data:3})}>multi </button>
        
        </div>
    )
}
export default Myreducer