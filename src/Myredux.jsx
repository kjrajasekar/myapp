import { increment } from "./actions"
import { useDispatch, useSelector } from "react-redux"


function Myredux(){
    // const data=useSelector(state=> state.counter)
    // const dispatch= useDispatch()
    return (
        <>
        <h1>Redux page</h1>
            <h2> redux value {data}</h2>
        <button onClick={()=>dispatch(increment())}>increment</button>

        </>
    )
}
export default Myredux