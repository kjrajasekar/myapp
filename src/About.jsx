import { useEffect, useState } from "react";
import Home from "./Home";


const About=()=>{
const [x,y]=useState(
    [{name:"rajasekar"},{name:"raj"},{name:"sekar"},{name:"rajasekar"},{name:"rajasekar"},{name:"sabari"}])
const [count, setcount]=useState(0)
const [color, setcolor]=useState("red")
const [st, setst]=useState(true)


// useEffect(()=>{console.log("hi")})
useEffect(()=>{myapi()},[])
useEffect(()=>{console.log("run")},[x, count])


const myapi=()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((x)=>{ return x.json()})
    .then((data)=> y(data))
}


    return (
        <div className="container">
            <h1 style={{background:color}}>About Component</h1>
            {/* <h3>state value is  {x.name}</h3> */}
            <p>sample content</p>
            <h3>state value is  {count}</h3>
            <h3 className={st?"d-block":"d-none"}>state value is  {color}</h3>


<div className="row">
    {
        
       x.map((person)=> <Home res={person} />) 
    }
</div>


            <button onClick={()=>{y({name:"arun"}); setcount(count+1); setcolor("green"); setst(!st)}}>click me</button>
        </div>
    )
}
export default About;