import React from "react";
import './index.css';

function App(props){
  return <p>hello {props.nameobj.name} ! email is {props.nameobj.email}</p>;
  
}
function App2(){
  const obj2= {name:"arya",email:"sdsad@saasd"};
  return (
  
  <>
  <p className="myClass1">hello</p>;
<App nameobj={obj2} />

  </>

  )
  
}

class App1 extends React.Component{
 
  render(){



    return(
    
    <div style={
      {
        color:'blue'
      }
    }>
    
    <h2>hello unikaksha</h2>
    <p>My name is swati yadav</p>
    </div>
    );
  }
}


class StateExample extends React.Component{
  constructor(props){
    super(props);
    this.state={exstate:"Example",
                ex2:"example2"};

  }

  changeText = () => {
    this.setState({ex2:"example 3"});
  }

  render(){
    return(
      <>
      <h1>State example</h1>
      <p>this is {this.state.ex2}</p>
      <button type="button" onClick={this.changeText}>change the text</button>
      </>
    );
  }
}

export default App;
export {App1,App2,StateExample};