import React from "react"

class Sample extends React.Component{
constructor(props){
super(props)
this.state={
    a:10,
    b:20,
    personal:{
        name:"raja"
    },
    data:[
        {}
    ]
}


}
componentDidCatch(){
 
}
componentWillUnmount(){

}
  mydata=()=>{
  this.setState({a:this.state.a+1})
}
render(){
    return (
        <div>
            <h2>class Component</h2>
            <p>data is {this.state.personal.name}</p>
            <p>data is {this.state.a}</p>
            <p>data is {this.props.res}</p>
           {/* <App  */}
            <button onClick={this.mydata}>click</button>
        </div>
    )
}
}
export default Sample