import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {App1,App2,StateExample} from './App';


// function Clock1(props){
//     return(
//         <>
//         <h1>Hello Everybody!!</h1>
//         <h3>the time is {props.date.toLocaleTimeString()}.</h3></>
//     );
// }


// class Clock extends React.Component{
//     constructor(props){
//         super(props);
//         this.state={date:new Date()}
//     }

//     //mounting
//     componentDidMount(){
// this.timerId = setInterval(
//     () => this.tick(),1000
// );
//     }

//     //unmount
//     componentWillUnmount(){
//         alert("the comoonent is about to be closed");
//         clearInterval(this.timerId);
//     }


//     //updating the state
//         tick(){
//             this.setState({
//                 date:new Date()
//             });
//         }
    
//     render(){
//         return(
//             <>
//             <h1>Hello Everybody!!</h1>
//             <h3>the time is {this.state.date.toLocaleTimeString()}.</h3></>
//         );
//     }
// }


  

// const root= ReactDOM.createRoot(document.getElementById('divid')); 
// root.render(<Clock />);



// function EventExample(){

//     const eventFuncExample = (num,e) => {
//         alert(e.type);
//     }
//     return(
//         <button onClick={(event) => eventFuncExample(23, event)}>click me!</button>
//     )
// }


// var root=ReactDOM.createRoot(document.getElementById('divid'));
// root.render(<EventExample />);

// function Form(){
//     function handleSubmit(e){
//         e.preventDefault();
//         // it is used to prevent the browser from executing the default action of the selected element
//         console.log("you have submitted the form.");
//     }
//     return(
//         <form onSubmit={handleSubmit}>
//             <button type="submit">Submit</button>
//         </form>
//     )
// }
// var root=ReactDOM.createRoot(document.getElementById('divid'));
// root.render(<Form />);

class Toggle extends React.Component{
    constructor(props){
        super(props);
        this.state={isToggleOn:true};
    


    this.handleClick=this.handleClick.bind(this);
    }
    handleClick(){


        //prevState provides with the snapshot from the previous state
        this.setState(prevState => ({
            isToggleOn : !prevState.isToggleOn
        }));
    }


    render(){
        return(
            <button onClick={this.handleClick}>{this.state.isToggleOn?'ON':'OFF'}</button>
        )
    }
}
var root=ReactDOM.createRoot(document.getElementById('divid'));
root.render(<Toggle />);


// var root=ReactDOM.createRoot(document.getElementById('divid'));
// root.render(<div className='myClass'><App nameobj='anish'/><App1 /><App2/><StateExample /></div>);
