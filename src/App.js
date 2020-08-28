import React, { Component }  from 'react';
// import logo from './logo.svg';
import './App.css';
import tasks from './sample/task.json';
import Task from './components/Task';
// console.log(tasks);

// Componentes
function FirstComponent(props){
  // Three calls
  console.log(props);
  // JSX return view
  return(
    <div id="first">
      <h3>{props.title}</h3>
      {props.text}
      </div>
  )
}

class SecondComponent extends React.Component{
  
  state={
    show:true
  }
  changeState(){
      this.setState({show:  !this.state.show})
  }
  render(){
    if(this.state.show){
      return (
        <div id="second">
          <h1>{this.props.title}</h1>
          <p>{this.props.text}</p>
          {/* /* <button onClick={()=>alert('change!')}>Change state</button> */} 
          {/* <button onClick={()=> this.state.show = false}>Change state</button> */}
          <button onClick={()=> this.changeState()}>Change state</button>
        </div>
      )
    } else {
      return (
        <div>
          <h1>Show is false</h1>
          <button onClick={()=> this.changeState()}>Change state</button>
        </div>
      )
    }
  }
}

// const App = () => <div>Este es mi : <FirstComponent></FirstComponent></div>

// class App extends React.Component {
//   render(){
//     return <div>Este es mi :  <FirstComponent/></div>
//   }
// }
// Componentes
//  function App() {
//    return (
//       //JSX
//      <div>Este es mi : 
//        <FirstComponent title="this is my title" text="first Hello world"/> 
//        <FirstComponent text="second hello world"/> 
//        <FirstComponent text="last hello world"/>
//        <SecondComponent title="props && state" text="show my state"/>
//      </div>
//    );
//  }

class App extends Component{
  state ={
    tasks:tasks
  }

  render(){
    return(
      <div>Hey!
        <Task tasks = {this.state.tasks}/>
      </div>
    )
  }
}


export default App;
