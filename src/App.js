import React from 'react';
// import logo from './logo.svg';
import './App.css';

// Componentes
function FirstComponent(){
  // JSX return view
  return(
    <div id="first">Primer componente</div>
  )
}

// const App = () => <div>Este es mi : <FirstComponent></FirstComponent></div>

class App extends React.Component {
  render(){
    return <div>Este es mi :  <FirstComponent/></div>
  }
}
// Componentes
// function App() {
//   return (
//     // JSX
//     <div>Este es mi : <FirstComponent></FirstComponent></div>
//   );
// }

export default App;
